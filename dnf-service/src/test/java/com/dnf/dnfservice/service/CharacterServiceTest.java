package com.dnf.dnfservice.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dnf.dnfservice.dto.response.character.CharacterBasicInfoResponseDto;
import com.dnf.dnfservice.repository.character.CharactersRepository;
import com.dnf.dnfservice.service.character.CharacterService;

@SpringBootTest
class CharacterServiceTest {
	@Autowired
	CharacterService characterService;

	@Autowired
	CharactersRepository charactersRepository;

	@Test
	void 직업랭킹구하기() {
		Long rank = charactersRepository.getRankByjobAndFame("귀검사(남)", 0L);
		System.out.println(rank);
	}

	@Test
	void 캐릭터기본정보조회() {
		CharacterBasicInfoResponseDto characterBasicInfoResponseDto = characterService.getCharacterBasicInfo("카인", "aa");
		System.out.println(characterBasicInfoResponseDto.getCharacterName());
		System.out.println(characterBasicInfoResponseDto.getAdventureName());
		System.out.println(characterBasicInfoResponseDto.getJobName());
		System.out.println(characterBasicInfoResponseDto.getServerName());
		System.out.println(characterBasicInfoResponseDto.getJobRanking());
		System.out.println(characterBasicInfoResponseDto.getGuildName());
	}

}