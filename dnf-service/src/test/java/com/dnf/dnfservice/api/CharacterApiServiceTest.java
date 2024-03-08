package com.dnf.dnfservice.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dnf.dnfservice.dto.feign.character.CharacterAvatarDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBuffAvatarDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBuffCreatureDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBuffEquipmentDto;
import com.dnf.dnfservice.dto.feign.character.CharacterCreatureDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentTraitDto;
import com.dnf.dnfservice.dto.feign.character.CharacterFlagDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSkillStyleDto;
import com.dnf.dnfservice.dto.feign.character.CharacterStatusDto;
import com.dnf.dnfservice.dto.feign.character.CharacterTalismanDto;
import com.dnf.dnfservice.service.character.CharacterApiService;

@SpringBootTest
class CharacterApiServiceTest {
	@Autowired
	CharacterApiService characterApiService;

	// hilder 63f0da745d2c5fb06df125801e81b43f
	// cain 당근 1711348ec6fd3c8d4b9a2f6993a33d56
	// prey 당근 54ec840ec55803a1f8dcc4f1b3951395
	@Test
	void 캐릭터조회_캐릭터이름만() {
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters("당근");
		characterSearchDto.getRows().stream().forEach(data -> System.out.println(data.getServerId() + " " + data.getCharacterName() + " " + data.getCharacterId()));
	}

	@Test
	void 캐릭터조회_서버와이름() {
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters("prey", "당근");
		characterSearchDto.getRows().stream().forEach(data -> System.out.println(data.getServerId() + " " + data.getCharacterName() + " " + data.getCharacterId()));
	}

	@Test
	void 캐릭터_기본정보조회() {
		CharacterBasicInfoDto characterBasicInfoDto = characterApiService.getCharacterBasicInfo("prey", "54ec840ec55803a1f8dcc4f1b3951395");
		System.out.println(characterBasicInfoDto.getCharacterName() + characterBasicInfoDto.getGuildName() + characterBasicInfoDto.getLevel());
	}

	@Test
	void 캐릭터_스탯조회_세부스탯없는캐릭터() {
		CharacterStatusDto characterStatusDto = characterApiService.getCharacterStatus("prey", "54ec840ec55803a1f8dcc4f1b3951395");
		System.out.println(characterStatusDto.getStatus().size());
	}

	@Test
	void 캐릭터_스탯조회_세부스탯있는캐릭터() {
		CharacterStatusDto characterStatusDto = characterApiService.getCharacterStatus("prey", "54ec840ec55803a1f8dcc4f1b3951395");
		System.out.println(characterStatusDto.getStatus().size());
	}

	@Test
	void 캐릭터_장비조회() {
		// CharacterEquipmentDto characterEquipmentDto = characterApiService.getCharacterEquipment("cain", "9b675e44d8ecbe2b7d5ac8b79e50206a");
		CharacterEquipmentDto characterEquipmentDto = characterApiService.getCharacterEquipment("prey", "54ec840ec55803a1f8dcc4f1b3951395");
	}

	@Test
	void 캐릭터_장비특성조회() {
		CharacterEquipmentTraitDto characterEquipmentTraitDto = characterApiService.getCharacterEquipmentTrait("prey", "54ec840ec55803a1f8dcc4f1b3951395");
	}

	@Test
	void 캐릭터_버프스킬강화장비조회() {
		CharacterBuffEquipmentDto characterBuffEquipmentDto = characterApiService.getCharacterBuffEquipment("prey", "54ec840ec55803a1f8dcc4f1b3951395");
	}

	@Test
	void 캐릭터_버프스킬아바타조회() {
		CharacterBuffAvatarDto characterBuffAvatarDto = characterApiService.getCharacterBuffAvatar("prey", "54ec840ec55803a1f8dcc4f1b3951395");
	}

	@Test
	void 캐릭터_버프스킬캐릭터조회() {
		CharacterBuffCreatureDto characterBuffCreatureDto = characterApiService.getCharacterBuffCreature("prey", "54ec840ec55803a1f8dcc4f1b3951395");
	}

	@Test
	void 캐릭터_스킬조회() {
		CharacterSkillStyleDto characterSkillStyleDto = characterApiService.getCharacterSkillStyle("prey", "54ec840ec55803a1f8dcc4f1b3951395");
	}

	@Test
	void 캐릭터_아바타조회() {
		CharacterAvatarDto characterAvatarDto = characterApiService.getCharacterAvatar("prey", "54ec840ec55803a1f8dcc4f1b3951395");
		System.out.println(characterAvatarDto.getAvatar().size());
	}

	@Test
	void 캐릭터_크리쳐조회() {
		CharacterCreatureDto characterCreatureDto = characterApiService.getCharacterCreature("prey", "54ec840ec55803a1f8dcc4f1b3951395");
	}

	@Test
	void 캐릭터_휘장조회() {
		CharacterFlagDto characterFlagDto = characterApiService.getCharacterFlag("prey", "54ec840ec55803a1f8dcc4f1b3951395");
	}

	@Test
	void 캐릭터_탈리스만조회() {
		CharacterTalismanDto characterTalismanDto = characterApiService.getCharacterTalisman("prey", "54ec840ec55803a1f8dcc4f1b3951395");
	}
}