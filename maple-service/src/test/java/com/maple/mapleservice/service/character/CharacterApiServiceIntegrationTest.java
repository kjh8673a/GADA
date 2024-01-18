package com.maple.mapleservice.service.character;

import com.maple.mapleservice.dto.feign.character.*;
import com.maple.mapleservice.dto.model.character.HyperStat;
import com.maple.mapleservice.dto.model.character.stats.CharacterFinalStatDto;
import com.maple.mapleservice.dto.model.character.stats.CharacterHyperStatsDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
@SpringBootTest
public class CharacterApiServiceIntegrationTest {
    @Autowired
    CharacterApiService characterApiService;

    private String ocid = "e0a4f439e53c369866b55297d2f5f4eb";

    @Test
    void getOcidKey() {
        String key = characterApiService.getOcidKey("아델");
        assertThat(key).isEqualTo("e0a4f439e53c369866b55297d2f5f4eb");
    }

    @Test
    void 캐시_로그_테스트() {
        String key = characterApiService.getOcidKey("아델");
        //나중에 테스트 확인 코드 넣자... outputcapturerule 이 적용이 잘안됨
    }

    @Test
    void 기본정보_조회_테스트() {
        CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
        assertThat(characterBasicDto.getCharacter_class()).isEqualTo("아델");
    }

    @Test
    void 인기도_조회_테스트() {
        Integer characterPopularity = characterApiService.getCharacterPopularity(ocid);
        assertThat(characterPopularity).isInstanceOf(Integer.class);
    }

    @Test
    void 종합_능력치_조회_테스트() {
        Map<String, String> characterStatDto = characterApiService.getCharacterStat(ocid);
        // assertThat(characterStatDto).isEqualTo(44);
    }

    @Test
    void 하이퍼스탯_조회_테스트() {
        Map<String, HyperStat> characterHyperStat = characterApiService.getCharacterHyperStat(ocid);
    }

    @Test
    void 어빌리티_조회_테스트() {
        CharacterAbilityDto characterAbility = characterApiService.getCharacterAbility(ocid);
        assertThat(characterAbility.getAbility_info().size()).isEqualTo(3);
    }

    @Test
    void 아이템_조회_테스트() {
        CharacterItemDto characterItem = characterApiService.getCharacterItem(ocid);
        //int 테스트
        assertThat(characterItem.getItem_equipment().get(0).getItem_total_option().getIntValue()).isNotNull();
    }

    @Test
    void 캐시아이템_조회_테스트() {
        CharacterCashItemDto characterCashItem = characterApiService.getCharacterCashItem(ocid);
    }

    @Test
    void 심볼_조회_테스트() {
        CharacterSymbolDto characterSymbol = characterApiService.getCharacterSymbol(ocid);
    }

    @Test
    void 펫_조회_테스트() {
        CharacterPetDto characterPet = characterApiService.getCharacterPet(ocid);
    }

    @Test
    void V_스킬_조회_테스트() {
        CharacterVMatrixDto characterVMatrixDto = characterApiService.getCharacterVMatrixDto(ocid);
    }
    
    @Test
    void 하이퍼_패시브_조회_테스트() {
        CharacterSkillDto characterSkillDto = characterApiService.getCharacterSkill(ocid, "hyperpassive");
    }

    @Test
    void 링크_스킬_조회_테스트() {
        CharacterLinkSkillDto characterLinkSkillDto = characterApiService.getCharacterLinkSkill(ocid);
    }

    @Test
    void 헥사_스킬_조회_테스트() {
        CharacterHexaMatrixDto characterHexaMatrixDto = characterApiService.getCharacterHexaMatrix(ocid);
    }

    @Test
    void 오차_스킬_조회_테스트() {
        CharacterSkillDto characterSkillDto = characterApiService.getCharacterSkill(ocid, "5");
    }

    @Test
    void 육차_스킬_조회_테스트() {
        CharacterSkillDto characterSkillDto = characterApiService.getCharacterSkill(ocid, "6");
    }

    @Test
    void 헥사_스탯_조회_테스트() {
        CharacterHexaMatrixStatDto characterHexaMatrixStatDto = characterApiService.getCharacterHexaMatrixStatDto(ocid);
        System.out.println(characterHexaMatrixStatDto.getCharacter_hexa_stat_core().get(0).getMain_stat_name());
    }
}
