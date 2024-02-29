package com.dnf.dnfservice.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
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
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters("cain", "aa");
		characterSearchDto.getRows().stream().forEach(data -> System.out.println(data.getServerId() + " " + data.getCharacterName() + " " + data.getCharacterId()));
	}

	@Test
	void 캐릭터_기본정보조회() {
		CharacterBasicInfoDto characterBasicInfoDto = characterApiService.getCharacterBasicInfo("cain", "fb8403b0409071f22d90a10d385e7095");
		System.out.println(characterBasicInfoDto.getCharacterName() + characterBasicInfoDto.getGuildName() + characterBasicInfoDto.getLevel());
	}
}