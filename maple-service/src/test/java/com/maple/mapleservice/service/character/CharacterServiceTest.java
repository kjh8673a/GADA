package com.maple.mapleservice.service.character;

import static org.assertj.core.api.Assertions.*;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.transaction.annotation.Transactional;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.ranking.Union;
import com.maple.mapleservice.dto.response.Character.CharacterExpHistoryResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.repository.character.CharacterExpHistoryRepository;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.service.ranking.RankingApiService;
import com.maple.mapleservice.util.CommonUtil;

@SpringBootTest
class CharacterServiceTest {
	private CommonUtil commonUtil = new CommonUtil();

	@Autowired
	CharacterApiService characterApiService;

	@Autowired
	RankingApiService rankingApiService;

	@Autowired
	CharacterService characterService;

	@Autowired
	CharacterServiceImpl characterServiceImpl;

	@Autowired
	CharacterRepository characterRepository;

	@Autowired
	CharacterExpHistoryRepository characterExpHistoryRepository;

	@Test
	void 경험치_히스토리_삭제_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		List<Long> numbersToBeRemained = characterExpHistoryRepository.findNumbersToBeRemained(ocid);
		List<Long> numbersToBeDeleted = characterExpHistoryRepository.findNumbersToBeDeleted(ocid, numbersToBeRemained);
		characterExpHistoryRepository.expHistoryBatchDelete(numbersToBeDeleted);
	}

	@Test
	void 경험치_히스토리_삭제할_번호_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		List<Long> numbersToBeRemained = characterExpHistoryRepository.findNumbersToBeRemained(ocid);
		List<Long> numbersToBeDeleted = characterExpHistoryRepository.findNumbersToBeDeleted(ocid, numbersToBeRemained);
		System.out.println(numbersToBeDeleted.size());
	}

	@Test
	void 경험치_히스토리_조회_안될때_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";

		List<CharacterBasicDto> listForExp = new ArrayList<>();
			CharacterBasicDto basicDto = characterApiService.getCharacterBasicCustomDate(ocid, commonUtil.customDate(300));
			if(basicDto.getCharacter_exp() == null) {
				CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
				characterBasicDto.setCharacter_level(0);
				characterBasicDto.setCharacter_exp(0L);
				characterBasicDto.setCharacter_exp_rate("0");
				listForExp.add(characterBasicDto);
			}else {
				listForExp.add(basicDto);
			}

		assertThat(listForExp.get(0).getCharacter_level()).isEqualTo(0);
  }

	void 캐릭터_기본정보_조회_테스트() {
		String characterName = "아델";
		assertThat(characterService.getCharacterBasicInfo(characterName).getCharacter_name()).isEqualTo(characterName);
	}

	@Test
	void 경험치_히스토리_최근_날짜_꺼내기_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		String date = characterExpHistoryRepository.getLatestExpDate(ocid);
		System.out.println(date);
	}

	@Test
	void 경험치_히스토리_DB_조회_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		List<CharacterExpHistoryResponseDto> characterExpHistoryResponseDtos = characterExpHistoryRepository.getExpHistory(
			ocid);

		assertThat(characterExpHistoryResponseDtos.size()).isEqualTo(7);
	}


	@Test
	void 경험치_히스토리_삽입_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		if (characterExpHistoryRepository.countByOcid(ocid) == 0) {
			characterServiceImpl.addCharacterExpHistoryFirstTime(ocid);
		}

		// assertThat(characterExpHistoryRepository.countByOcid(ocid)).isEqualTo(7);
	}

	@Test
	void 경험치_히스토리_개수_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		Long expCount = characterExpHistoryRepository.countByOcid(ocid);

		System.out.println(expCount);
	}

	@Test
	void 본캐_찾기_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		List<CharacterResponseDto> characterResponseDtoList = characterService.findMainCharacter(ocid);

		List<String> characterNames = characterResponseDtoList.stream().map(CharacterResponseDto::getCharacter_name).collect(Collectors.toList());
		characterNames.forEach(System.out::println);

		// assertThat(characterResponseDtoList.size()).isEqualTo(3);
	}

	@Test
	void 캐릭터_이름으로_parent_ocid_찾기_테스트() {
		String characterName = "아델";
		assertThat(characterService.getParentOcidByCharacterName(characterName)).isEqualTo("e0a4f439e53c369866b55297d2f5f4eb");
	}

	@Test
	void 캐릭터_정보_DB_조회_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		assertThat(characterRepository.findByOcid(ocid).getOcid()).isEqualTo(ocid);
	}

	@Test
	void 캐릭터_DB에_저장_통합_테스트() {
		characterService.addCharacterInformationToDB("에첸");

		// String ocid = characterApiService.getOcidKey("아델");
		// Character character = characterRepository.findByOcid(ocid);
		//
		// assertThat(ocid).isEqualTo(character.getOcid());
	}

	@Test
	void 길드명없을때_null로_들어가는지_테스트() {
		String ocid = characterApiService.getOcidKey("태주");
		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		Long combatPower = characterApiService.getCharacterCombatPower(ocid);
		List<Union> unionList = rankingApiService.getRankingUnion(ocid, characterBasicDto.getWorld_name());
		Collections.sort(unionList, (o1, o2) -> Long.compare(o2.getUnion_level(), o1.getUnion_level()));

		String parent_ocid = characterApiService.getOcidKey(unionList.get(0).getCharacter_name());

		Character characterForInsert = Character.builder()
			.ocid(ocid)
			.date(commonUtil.date)
			.world_name(characterBasicDto.getWorld_name())
			.character_name(characterBasicDto.getCharacter_name())
			.combat_power(combatPower)
			.guild_name(characterBasicDto.getCharacter_guild_name())
			.parent_ocid(parent_ocid)
			.character_class(characterBasicDto.getCharacter_class())
			.character_class_level(characterBasicDto.getCharacter_class_level())
			.character_level(Long.valueOf(characterBasicDto.getCharacter_level()))
			.character_image(characterBasicDto.getCharacter_image())
			.build();

		assertThat(characterForInsert.getGuild_name()).isNull();
	}

	@Test
	void 이전_닉네임_저장_테스트() {
		String ocid = characterApiService.getOcidKey("큐브충");
		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		Long combatPower = characterApiService.getCharacterCombatPower(ocid);
		String oguildId = characterServiceImpl.getOguildId(characterBasicDto.getCharacter_guild_name(), characterBasicDto.getWorld_name());

		Character character = characterRepository.findByOcid(ocid);
		String old_name = character.getCharacter_name();

		String date = character.getDate();

		// 조회 기준일
		character.setDate(commonUtil.date);
		// 월드 명
		character.setWorld_name(characterBasicDto.getWorld_name());
		// 캐릭터 이름 + 이전 캐릭터 이름
		if(!character.getCharacter_name().equals(characterBasicDto.getCharacter_name())) {
			character.setPrev_name(character.getCharacter_name());
			character.setCharacter_name(characterBasicDto.getCharacter_name());
		}
		// 전투력
		character.setCombat_power(combatPower);
		// 길드명 + 길드식별자
		if(characterBasicDto.getCharacter_guild_name() != null && !characterBasicDto.getCharacter_guild_name().equals(character.getGuild_name())) {
			character.setGuild_name(characterBasicDto.getCharacter_guild_name());
			// 길드ocid 조회하는 api 필요
			character.setOguild_id(oguildId);
		}

		characterRepository.save(character);

		assertThat(characterRepository.findByCharacterName("큐브충").getPrev_name()).isEqualTo(null);
	}

	@Test
	void 캐릭터_정보_없는_경우_DB에_저장_테스트() {
		String ocid = characterApiService.getOcidKey("큐브충");
		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		Long combatPower = characterApiService.getCharacterCombatPower(ocid);
		String oguildId = characterServiceImpl.getOguildId(characterBasicDto.getCharacter_guild_name(), characterBasicDto.getWorld_name());
		String parent_ocid = "e0a4f439e53c369866b55297d2f5f4eb"; // 아델

		Character character = characterRepository.findByOcid(ocid);

		if(character == null) {
			Character characterForInsert = Character.builder()
				.ocid(ocid)
				.date(commonUtil.date)
				.world_name(characterBasicDto.getWorld_name())
				.character_name(characterBasicDto.getCharacter_name())
				.combat_power(combatPower)
				.guild_name(characterBasicDto.getCharacter_guild_name())
				.parent_ocid(parent_ocid)
				.oguild_id(oguildId)
				.character_class(characterBasicDto.getCharacter_class())
				.character_class_level(characterBasicDto.getCharacter_class_level())
				.character_level(Long.valueOf(characterBasicDto.getCharacter_level()))
				.character_image(characterBasicDto.getCharacter_image())
				.build();

			characterRepository.save(characterForInsert);
		}

		assertThat(characterRepository.findByCharacterName("큐브충").getCharacter_name()).isEqualTo("큐브충");
	}
	
	@Test
	void 캐릭터_정보_있는데_날짜_다를_경우_갱신_테스트() {
		String ocid = "45a15799827229de6694e3086160d615efe8d04e6d233bd35cf2fabdeb93fb0d"; // 핵불닭푸딩
		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		Long combatPower = characterApiService.getCharacterCombatPower(ocid);

		Character character = characterRepository.findByOcid(ocid);

		String date = character.getDate();

		// 조회 기준일
		character.setDate(commonUtil.date);
		// 월드 명
		character.setWorld_name(characterBasicDto.getWorld_name());
		// 캐릭터 이름 + 이전 캐릭터 이름
		if(!character.getCharacter_name().equals(characterBasicDto.getCharacter_name())) {
			character.setPrev_name(character.getCharacter_name());
			character.setCharacter_name(characterBasicDto.getCharacter_name());
		}
		// 전투력
		character.setCombat_power(combatPower);
		// 길드명 + 길드식별자
		if(characterBasicDto.getCharacter_guild_name() != null && !characterBasicDto.getCharacter_guild_name().equals(character.getGuild_name())) {
			character.setGuild_name(characterBasicDto.getCharacter_guild_name());
			// 길드ocid 조회하는 api 필요
			character.setOguild_id("oguild_name");
		}

		characterRepository.save(character);

		// assertThat(characterRepository.findByCharacterName("핵불닭푸딩").getDate()).isEqualTo(commonUtil.date).isNotEqualTo(date);
	}

	private final ZoneId zoneId = ZoneId.of("Asia/Seoul");

	@Test
	void getOcidKey() {
		String key = characterApiService.getOcidKey("아델");
		System.out.println(LocalDateTime.now(zoneId));
		System.out.println(LocalDateTime.of(getNextDate(), ZonedDateTime.of(getNextDate(), LocalTime.of(1, 0, 0), zoneId).toLocalTime()));
		System.out.println(Duration.between(
			LocalDateTime.now(zoneId),
			LocalDateTime.of(getNextDate(), ZonedDateTime.of(getNextDate(), LocalTime.of(1, 0, 0), zoneId).toLocalTime())));
		assertThat(key).isEqualTo("e0a4f439e53c369866b55297d2f5f4eb");
	}

	private static LocalDate getNextDate() {
		if(LocalDateTime.now(ZoneId.of("Asia/Seoul")).toLocalTime().isBefore(LocalTime.of(1, 0, 0))) {
			return LocalDateTime.now().atZone(ZoneId.of("Asia/Seoul")).toLocalDate();
		}else {
			return LocalDateTime.now().atZone(ZoneId.of("Asia/Seoul")).plusDays(1).toLocalDate();
		}
	}

}