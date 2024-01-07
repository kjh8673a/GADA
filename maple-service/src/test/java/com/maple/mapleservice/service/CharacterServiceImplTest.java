package com.maple.mapleservice.service;

import com.maple.mapleservice.dto.feign.character.CharacterStatDto;
import com.maple.mapleservice.entity.character.FinalStat;
import org.assertj.core.api.Assertions;
import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.system.OutputCaptureRule;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static org.assertj.core.api.Assertions.assertThat;



@SpringBootTest
class CharacterServiceImplTest {
    @Autowired
    CharacterService characterService;

//    @Rule
//    public OutputCaptureRule output = new OutputCaptureRule();

    @Test
    void getOcidKey() {
        String key = characterService.getOcidKey("아델");
        assertThat(key).isEqualTo("e0a4f439e53c369866b55297d2f5f4eb");
    }

    @Test
    void 캐시_로그_테스트(){
        String key = characterService.getOcidKey("하이");
        //나중에 테스트 확인 코드 넣자... outputcapturerule 이 적용이 잘안됨
    }
    @Test
    void 스탯_api_테스트(){
        String ocid = characterService.getOcidKey("도적");
        CharacterStatDto characterStatDto = characterService.getCharacterStat(ocid);
        assertThat(characterStatDto.getFinal_stat().size()).isEqualTo(44);
    }
}