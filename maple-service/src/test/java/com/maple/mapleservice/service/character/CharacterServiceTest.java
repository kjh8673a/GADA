package com.maple.mapleservice.service.character;

import static org.assertj.core.api.Assertions.*;

import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.ranking.Union;
import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.service.ranking.RankingApiService;
import com.maple.mapleservice.util.CommonUtil;

@SpringBootTest
class CharacterServiceTest {
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

	private CommonUtil commonUtil = new CommonUtil();

	@Test
	void 본캐_찾기_캐시에서_삭제() {
		String parent_ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		characterServiceImpl.deleteFindMainCharacterCache(parent_ocid);
	}

	@Test
	void 본캐_찾기_테스트() {
		String ocid = "e0a4f439e53c369866b55297d2f5f4eb";
		List<CharacterResponseDto> characterResponseDtoList = characterService.findMainCharacter(ocid);

		assertThat(characterResponseDtoList.size()).isEqualTo(3);
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
		characterService.addCharacterInformationToDB("아델");

		String ocid = characterApiService.getOcidKey("아델");
		Character character = characterRepository.findByOcid(ocid);

		assertThat(ocid).isEqualTo(character.getOcid());
	}

	@Test
	void 길드명없을때_null로_들어가는지_테스트() {
		String ocid = characterApiService.getOcidKey("태주");
		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		String combatPower = characterApiService.getCharacterCombatPower(ocid);
		List<Union> unionList = rankingApiService.getRankingUnion(ocid, characterBasicDto.getWorld_name());
		Collections.sort(unionList, (o1, o2) -> Long.compare(o2.getUnion_level(), o1.getUnion_level()));

		String parent_ocid = characterApiService.getOcidKey(unionList.get(0).getCharacter_name());

		Character characterForInsert = Character.builder()
			.ocid(ocid)
			.date(commonUtil.date)
			.world_name(characterBasicDto.getWorld_name())
			.character_name(characterBasicDto.getCharacter_name())
			.combat_power(Long.parseLong(combatPower))
			.guild_name(characterBasicDto.getCharacter_guild_name())
			.parent_ocid(parent_ocid)
			.build();

		assertThat(characterForInsert.getGuild_name()).isNull();
	}

	@Test
	void 대표ocid_갱신_테스트() {
		// ocid가 a가 아니면서 parent_ocid가 qwerty인것을 갱신한다
		characterServiceImpl.updateParentOcid("a", "qwerty", "e0a4f439e53c369866b55297d2f5f4eb");

		assertThat(characterRepository.findByParentOcid("qwerty")).isEmpty();
	}

	@Test
	void 이전_닉네임_저장_테스트() {
		String ocid = characterApiService.getOcidKey("큐브충");
		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		String combatPower = characterApiService.getCharacterCombatPower(ocid);

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
		character.setCombat_power(Long.parseLong(combatPower));
		// 길드명 + 길드식별자
		if(characterBasicDto.getCharacter_guild_name() != null && !characterBasicDto.getCharacter_guild_name().equals(character.getGuild_name())) {
			character.setGuild_name(characterBasicDto.getCharacter_guild_name());
			// 길드ocid 조회하는 api 필요
			character.setOguild_id("oguild_name");
		}

		characterRepository.save(character);

		assertThat(characterRepository.finndByCharacterName("큐브충").getPrev_name()).isEqualTo(null);
	}

	@Test
	void 캐릭터_정보_없는_경우_DB에_저장_테스트() {
		String ocid = characterApiService.getOcidKey("큐브충");
		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		String combatPower = characterApiService.getCharacterCombatPower(ocid);
		String oguildId = characterServiceImpl.getOguildId(characterBasicDto.getCharacter_guild_name(), characterBasicDto.getWorld_name());
		String parent_ocid = "e0a4f439e53c369866b55297d2f5f4eb"; // 아델

		Character character = characterRepository.findByOcid(ocid);

		if(character == null) {
			Character characterForInsert = Character.builder()
				.ocid(ocid)
				.date(commonUtil.date)
				.world_name(characterBasicDto.getWorld_name())
				.character_name(characterBasicDto.getCharacter_name())
				.combat_power(Long.parseLong(combatPower))
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

		assertThat(characterRepository.finndByCharacterName("큐브충").getCharacter_name()).isEqualTo("큐브충");
	}
	
	@Test
	void 캐릭터_정보_있는데_날짜_다를_경우_갱신_테스트() {
		String ocid = "45a15799827229de6694e3086160d615efe8d04e6d233bd35cf2fabdeb93fb0d"; // 핵불닭푸딩
		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		String combatPower = characterApiService.getCharacterCombatPower(ocid);

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
		character.setCombat_power(Long.parseLong(combatPower));
		// 길드명 + 길드식별자
		if(characterBasicDto.getCharacter_guild_name() != null && !characterBasicDto.getCharacter_guild_name().equals(character.getGuild_name())) {
			character.setGuild_name(characterBasicDto.getCharacter_guild_name());
			// 길드ocid 조회하는 api 필요
			character.setOguild_id("oguild_name");
		}

		characterRepository.save(character);

		assertThat(characterRepository.finndByCharacterName("핵불닭푸딩").getDate()).isEqualTo(commonUtil.date).isNotEqualTo(date);
	}

	@Test
	void 유니온_랭킹에서_가져온_DB에_없는_캐릭터들_DB에_저장_테스트() {
		String ocid = "1f692fbc745a850242aba54bfd001d89"; // 다래푸딩
		String world_name = "루나";
		// 유니온 랭킹 조회 -> 핵불닭푸딩이 나옴
		List<Union> unionList = rankingApiService.getRankingUnion(ocid, world_name);
		Collections.sort(unionList, (o1, o2) -> Long.compare(o2.getUnion_level(), o1.getUnion_level()));
		String parent_ocid = characterApiService.getOcidKey(unionList.get(0).getCharacter_name());

		characterServiceImpl.addChacterInformationToDbFromUnionRanking("다래푸딩", parent_ocid, unionList);

		assertThat(characterRepository.finndByCharacterName("핵불닭푸딩")).isNotNull();
	}

	@Test
	void getOcidKey() {
		String key = characterApiService.getOcidKey("아델");
		assertThat(key).isEqualTo("e0a4f439e53c369866b55297d2f5f4eb");
	}
	
}