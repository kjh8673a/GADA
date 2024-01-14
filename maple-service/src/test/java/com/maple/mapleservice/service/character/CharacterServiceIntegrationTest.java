package com.maple.mapleservice.service.character;

import com.maple.mapleservice.dto.response.CharacterBasicInfoDto;
import com.maple.mapleservice.dto.response.CharacterItemAndStatDto;
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
        CharacterBasicInfoDto characterBasicInfo = characterService.getCharacterBasicInfo(characterName);
    }
    @Test
    void 장비_스탯_조회_테스트(){
        CharacterItemAndStatDto characterItemAndStat = characterService.getCharacterItemAndStat(characterName);
    }
}
