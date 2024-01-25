package com.maple.mapleservice.service.ranking;

import java.util.ArrayList;
import java.util.List;

import com.maple.mapleservice.dto.model.ranking.Guild;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.response.Ranking.CharacterCombatPowerRankingResponseDto;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.repository.ranking.RankingRepository;
import com.maple.mapleservice.service.character.CharacterApiService;
import com.maple.mapleservice.service.character.CharacterService;

import lombok.RequiredArgsConstructor;

@Service
@Slf4j
@RequiredArgsConstructor
public class RankingServiceImpl implements RankingService {
	private final RankingApiService rankingApiService;
	private final CharacterService characterService;
	private final CharacterRepository characterRepository;
	private final CharacterApiService characterApiService;
	private final RankingRepository rankingRepository;

	@Override
	public void addCharacterInformationFromRankingToDB(int world_type, int page) {
		rankingApiService.getRankingOverall(world_type, page).stream()
			.forEach(o -> {
				characterService.addCharactersFromRanking(o.getCharacter_name());
			});
	}

	@Override
	public void addCharacterImageFromDB() {
		List<Character> characterList = characterRepository.findNotHaveCharacterImage();

		characterList.stream().forEach(character -> {
			if(character.getCharacter_image() == null || character.getCharacter_image().isBlank()) {
				CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(character.getOcid());
				try {
					Thread.sleep(3000);
				} catch (InterruptedException e) {
					throw new RuntimeException(e);
				}
				character.setCharacter_image(characterBasicDto.getCharacter_image());
				characterRepository.save(character);
			}
		});
	}

	@Override
	@Transactional
	public Page<CharacterCombatPowerRankingResponseDto> getCombatPowerRanking(String world_name, String character_class,
		Pageable pageable) {

		log.info("전투력 랭킹 조회 : " + world_name + " : " + character_class + " : " + pageable.getPageNumber());
		Page<CharacterCombatPowerRankingResponseDto> result = rankingRepository.getCombatPowerRanking(world_name, character_class, pageable);

		return result;
	}

	@Override
	public List<Guild> getGuildWaterwayRanking(String world_name, int page) {
		log.error("페이지 : {}", page);
		int apiPage = page / 10 + 1;
		int idx = page % 10;
		List<Guild> guildList = rankingApiService.getRankingGuild(world_name, 2, apiPage);
		List<Guild> guildRankingResponseDtoList = new ArrayList<>();

		for(int i = idx * 20; i < (idx + 1) * 20; i++){
			guildRankingResponseDtoList.add(guildList.get(i));
		}

		return guildRankingResponseDtoList;
	}
}
