package com.maple.mapleservice.service.character;

import static org.assertj.core.api.Assertions.*;

import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.ranking.Union;
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
	CharacterServiceImpl characterServiceImpl;

	@Autowired
	CharacterRepository characterRepository;

	private CommonUtil commonUtil = new CommonUtil();


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
		characterServiceImpl.updateParentOcid("f678322aa0932f4ec472798aa6a35c67", "e0a4f439e53c369866b55297d2f5f4eb", "3a7535b853b41574db55d045a91d56a6efe8d04e6d233bd35cf2fabdeb93fb0d");
	}

	@Test
	void 캐릭터_DB에_저장_테스트() {
		characterServiceImpl.AddCharacterInformationToDB("태주");

		String ocid = characterApiService.getOcidKey("태주");
		Character character = characterRepository.findByOcid(ocid);

		System.out.println(character);

		assertThat(ocid).isEqualTo(character.getOcid());
	}

	@Test
	void getOcidKey() {
		String key = characterApiService.getOcidKey("아델");
		assertThat(key).isEqualTo("e0a4f439e53c369866b55297d2f5f4eb");
	}
	
}