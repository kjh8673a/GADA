package com.maple.mapleservice.service.character;

import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterItemAndStatDto;
import com.maple.mapleservice.dto.response.Character.CharacterItemResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterStatsResponseDto;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CharacterServiceIntegrationTest {
    @Autowired
    CharacterService characterService;

    private String characterName = "아델";
    @Test
    void 베이직_인포_조회_테스트(){
        CharacterBasicInfoResponseDto characterBasicInfo = characterService.getCharacterBasicInfo(characterName);
    }

    @Test
    void 장비_조회_테스트(){
        CharacterItemResponseDto characterItemResponseDto = characterService.getCharacterItem(characterName);
    }

    @Test
    void 스탯_조회_테스트(){
        CharacterStatsResponseDto characterStatsResponseDto = characterService.getCharacterStats(characterName);
    }


}
