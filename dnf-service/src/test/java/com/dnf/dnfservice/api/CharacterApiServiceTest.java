package com.dnf.dnfservice.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.feign.character.CharacterStatusDto;
import com.dnf.dnfservice.service.character.CharacterApiService;

@SpringBootTest
class CharacterApiServiceTest {
	@Autowired
	CharacterApiService characterApiService;

	@Test
	void 캐릭터조회_캐릭터이름만() {
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters("aa");
		characterSearchDto.getRows().stream().forEach(data -> System.out.println(data.getServerId() + " " + data.getCharacterName() + " " + data.getCharacterId()));
	}

	@Test
	void 캐릭터조회_서버와이름() {
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters("cain", "우타마루");
		characterSearchDto.getRows().stream().forEach(data -> System.out.println(data.getServerId() + " " + data.getCharacterName() + " " + data.getCharacterId()));
	}

	@Test
	void 캐릭터_기본정보조회() {
		CharacterBasicInfoDto characterBasicInfoDto = characterApiService.getCharacterBasicInfo("cain", "fb8403b0409071f22d90a10d385e7095");
		System.out.println(characterBasicInfoDto.getCharacterName() + characterBasicInfoDto.getGuildName() + characterBasicInfoDto.getLevel());
	}

	@Test
	void 캐릭터_스탯조회_세부스탯없는캐릭터() {
		CharacterStatusDto characterStatusDto = characterApiService.getCharacterStatus("cain", "10082980942c8d833fb26a2b7b58dc9f");
		System.out.println(characterStatusDto.getCharacterName());
		System.out.println(characterStatusDto.getStatus().size());
	}

	@Test
	void 캐릭터_스탯조회_세부스탯있는캐릭터() {
		CharacterStatusDto characterStatusDto = characterApiService.getCharacterStatus("cain", "9b675e44d8ecbe2b7d5ac8b79e50206a");
		System.out.println(characterStatusDto.getCharacterName());
		System.out.println(characterStatusDto.getStatus().size());
	}
}