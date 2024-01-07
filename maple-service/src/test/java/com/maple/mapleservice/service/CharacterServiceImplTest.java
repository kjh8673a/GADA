package com.maple.mapleservice.service;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.feign.character.CharacterStatDto;
import com.maple.mapleservice.entity.character.HyperStat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class CharacterServiceImplTest {
    @Autowired
    CharacterService characterService;

//    @Rule
//    public OutputCaptureRule output = new OutputCaptureRule();
    private String ocid = "e0a4f439e53c369866b55297d2f5f4eb";

    @Test
    void getOcidKey() {
        String key = characterService.getOcidKey("아델");
        assertThat(key).isEqualTo("e0a4f439e53c369866b55297d2f5f4eb");
    }

    @Test
    void 캐시_로그_테스트(){
        String key = characterService.getOcidKey("아델");
        //나중에 테스트 확인 코드 넣자... outputcapturerule 이 적용이 잘안됨
    }
    @Test
    void 기본정보_조회_테스트(){
        CharacterBasicDto characterBasicDto = characterService.getCharacterBasic(ocid);
        assertThat(characterBasicDto.getCharacter_class()).isEqualTo("아델");
    }
    @Test
    void 인기도_조회_테스트(){
        Integer characterPopularity = characterService.getCharacterPopularity(ocid);
        assertThat(characterPopularity).isInstanceOf(Integer.class);
    }
    @Test
    void 종합_능력치_조회_테스트(){
        CharacterStatDto characterStatDto = characterService.getCharacterStat(ocid);
        assertThat(characterStatDto.getFinal_stat().size()).isEqualTo(44);
    }

    @Test
    void 하이퍼스탯_조회_테스트(){
        List<HyperStat> characterHyperStat = characterService.getCharacterHyperStat(ocid);
        for (HyperStat hyperStat : characterHyperStat) {
            System.out.println(hyperStat.getStat_type()+": "+hyperStat.getStat_level()+" :"+hyperStat.getStat_increase());
        }
    }
}