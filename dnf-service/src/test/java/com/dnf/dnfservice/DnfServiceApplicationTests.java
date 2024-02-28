package com.dnf.dnfservice;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.service.character.CharacterApiService;

@SpringBootTest
class DnfServiceApplicationTests {
	@Autowired
	CharacterApiService characterApiService;

	@Test
	void contextLoads() {
	}

	@Test
	void 캐릭터조회() {
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters("aa");
		characterSearchDto.getRows().stream().forEach(data -> System.out.println(data.getServerId() + " " + data.getCharacterName() + " " + data.getCharacterId()));
	}

}
