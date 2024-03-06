package com.dnf.dnfservice.service.character;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dnf.dnfservice.dto.response.character.CharacterInformationResponseDto;
import com.dnf.dnfservice.entity.Characters;
import com.dnf.dnfservice.repository.character.CharactersRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class CharacterSchedule {
	private final CharactersRepository charactersRepository;
	private final CharacterService characterService;
	private final RedisTemplate redisTemplate;


	@Transactional
	@Scheduled(cron = "0 0/7 * * * ?")
	public void addCharacterFromRedis() {
		log.info("캐릭터 DB에 저장");

		List<CharacterInformationResponseDto> characterInsertList = new ArrayList<>();
		List<CharacterInformationResponseDto> characterUpdateList	= new ArrayList<>();
		Set<String> characterValues = redisTemplate.opsForSet().members("addCharacterToDB");

		int count = 0;
		int limit = 1000;
		for(String value : characterValues) {
			String serverName = value.split("_")[0];
			String characterName = value.split("_")[1];

			CharacterInformationResponseDto characterInformation = characterService.getCharacterInformation(serverName, characterName);

			Characters character = charactersRepository.findByServerNameAndCharacterName(serverName, characterName);
			if(character != null) {
				characterUpdateList.add(characterInformation);
			}else {
				characterInsertList.add(characterInformation);
			}

			redisTemplate.opsForSet().remove("addCharacterToDB", value);

			count++;
			log.info("addCharacter " + serverName + "_" + characterName + " : " + count + " / " + limit);
			if (count == limit) {
				break;
			}
		}

		charactersRepository.batchCharacterInsert(characterInsertList);
		charactersRepository.batchCharacterUpdate(characterUpdateList);
	}

	// 30분마다 set -> zset 저장 : 인기 검색어
	@Transactional
	@Scheduled(cron = "0 0/30 * * * ?")
	public void addToZSetCharacterViewRank() {
		log.info("검색기록 zset에 삽입");

		Set<String> redisKeys = redisTemplate.keys("characterViewCount*");
		Objects.requireNonNull(redisKeys).forEach(
			data -> {
				String ocid = data.split("::")[1];
				Long size = redisTemplate.opsForSet().size(data);
				redisTemplate.opsForZSet().add("characterViewRank", ocid, size);
			}
		);
	}

	// 매일 00시에 기간 만료된 인기검색어 set에서 제거
	@Scheduled(cron = "0 0 0 * * *", zone = "Asia/Seoul")
	public void removeFromSetCharacterViewRank() {
		log.info("기간 만료된 검색 기록 삭제");
		Set<String> redisKeys = redisTemplate.keys("characterViewCount*");
		Objects.requireNonNull(redisKeys).forEach(
			data -> {
				Set<String> redisExpireTime = redisTemplate.opsForSet().members(data);
				redisExpireTime.stream().forEach(expire -> {
					if(LocalDateTime.parse(expire).toLocalDate().isBefore(LocalDate.now(ZoneId.of("Asia/Seoul")))) {
						redisTemplate.opsForSet().remove(data, expire);
					}
				});
			}
		);
	}

}
