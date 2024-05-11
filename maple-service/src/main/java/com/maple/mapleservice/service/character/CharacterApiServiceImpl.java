package com.maple.mapleservice.service.character;

import com.maple.mapleservice.dto.feign.character.*;
import com.maple.mapleservice.dto.model.character.FinalStat;
import com.maple.mapleservice.dto.model.character.HyperStat;
import com.maple.mapleservice.exception.CustomException;
import com.maple.mapleservice.exception.ErrorCode;
import com.maple.mapleservice.feign.CharacterFeignClient;
import com.maple.mapleservice.feign.OcidFeignClient;
import com.maple.mapleservice.util.CommonUtil;
import com.maple.mapleservice.util.cache.RedisCacheable;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class CharacterApiServiceImpl implements CharacterApiService {
    private final OcidFeignClient ocidFeignClient;
    private final CharacterFeignClient characterFeignClient;

    private CommonUtil commonUtil = new CommonUtil();

    @Override
    @RedisCacheable(value = "character-api-ocid", key = "#characterName")
    public String getOcidKey(String characterName) {
        String ocid = "";
        try {
            ocid = ocidFeignClient.getOcidDTO(characterName).getOcid();
            if (ocid == null || ocid.isBlank()) {
                throw new CustomException(ErrorCode.OCID_NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("Exception ERROR: {} ", e.getMessage());
        }

        return ocid;
    }

    @Override
    // @RedisCacheable(value = "character-api-basic", key = "#ocid")
    public CharacterBasicDto getCharacterBasic(String ocid) {
        CharacterBasicDto characterBasicDto = null;
        try {
            characterBasicDto = characterFeignClient.getCharacterBasicDto(ocid);
            if(characterBasicDto == null) {
                throw new CustomException(ErrorCode.ID_NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("Exception ERROR: {} ", e.getMessage());
        }

        return characterBasicDto;
    }

    @Override
    // @RedisCacheable(value = "character-api-popularity", key = "#ocid")
    public Integer getCharacterPopularity(String ocid) {
        return characterFeignClient.getCharacterPopularityDto(ocid).getPopularity();
    }

    @Override
    public Long getCharacterCombatPower(String ocid) {
        String combatPower = getCharacterStat(ocid).get("전투력");
        if(null == combatPower)
            return 0L;
        else
            return Long.parseLong(combatPower);
    }

    @Override
    // @RedisCacheable(value = "character-api-final-stat", key = "#ocid")
    public Map<String, String> getCharacterStat(String ocid) {
        List<FinalStat> finalStats = characterFeignClient.getCharacterStatDto(ocid).getFinal_stat();
        Map<String, String> finalStatMap = new LinkedHashMap<>();
        for (FinalStat stat : finalStats) {
            finalStatMap.put(stat.getStat_name(), stat.getStat_value());
        }
        return finalStatMap;
    }

    @Override
    // @RedisCacheable(value = "character-api-hyper-stat", key = "#ocid")
    public Map<String, HyperStat> getCharacterHyperStat(String ocid) {
        List<HyperStat> hyperStats = getSelectedHyperStat(ocid);

        Map<String, HyperStat> hyperStatMap = new LinkedHashMap<>();
        for (HyperStat hyperStat : hyperStats) {
            hyperStatMap.put(hyperStat.getStat_type(), hyperStat);
        }

        return hyperStatMap;
    }

    public List<HyperStat> getSelectedHyperStat(String ocid) {
        CharacterHyperStatDto characterHyperStatDto = characterFeignClient.getCharacterHyperStatDto(ocid);
        switch (characterHyperStatDto.getUse_preset_no()) {
            case "1" -> {
                return characterHyperStatDto.getHyper_stat_preset_1();
            }
            case "2" -> {
                return characterHyperStatDto.getHyper_stat_preset_2();
            }
            case "3" -> {
                return characterHyperStatDto.getHyper_stat_preset_3();
            }
            default -> {
                return null;
            }
        }
    }

    @Override
    // @RedisCacheable(value = "character-api-ability", key = "#ocid")
    public CharacterAbilityDto getCharacterAbility(String ocid) {
        return characterFeignClient.getCharacterAbilityDto(ocid);
    }

    @Override
    // @RedisCacheable(value = "character-api-item", key = "#ocid")
    public CharacterItemDto getCharacterItem(String ocid) {
        return characterFeignClient.getCharacterItemDto(ocid);
    }

    @Override
    // @RedisCacheable(value = "character-api-cashitem", key = "#ocid")
    public CharacterCashItemDto getCharacterCashItem(String ocid) {
        return characterFeignClient.getCharacterCashItemDto(ocid);
    }

    @Override
    // @RedisCacheable(value = "character-api-symbol", key = "#ocid")
    public CharacterSymbolDto getCharacterSymbol(String ocid) {
        return characterFeignClient.getCharacterSymbolDto(ocid);
    }

    @Override
    // @RedisCacheable(value = "character-api-pet", key = "#ocid")
    public CharacterPetDto getCharacterPet(String ocid) {
        return characterFeignClient.getCharacterPetDto(ocid);
    }

    @Override
    public CharacterBasicDto getCharacterBasicCustomDate(String ocid, String date) {
        return characterFeignClient.getCharacterBasicDateDto(ocid, date);
    }

    @Override
    // @RedisCacheable(value = "character-api-vmatrix", key = "#ocid")
    public CharacterVMatrixDto getCharacterVMatrixDto(String ocid) {
        return characterFeignClient.getCharacterVMatrixDto(ocid);
    }

    @Override
    // @RedisCacheable(value = "character-api-skill", key = "#ocid + '_' + #character_skill_grade")
    public CharacterSkillDto getCharacterSkill(String ocid, String character_skill_grade) {
        return characterFeignClient.getCharacterSkillDto(ocid, character_skill_grade);
    }

    @Override
    // @RedisCacheable(value = "character-api-link-skill", key = "#ocid")
    public CharacterLinkSkillDto getCharacterLinkSkill(String ocid) {
        return characterFeignClient.getCharacterLinkSkillDto(ocid);
    }

    @Override
    // @RedisCacheable(value = "character-api-hexa-matrix", key = "#ocid")
    public CharacterHexaMatrixDto getCharacterHexaMatrix(String ocid) {
        return characterFeignClient.getCharacterHexaMatrixDto(ocid);
    }

    @Override
    public CharacterHexaMatrixStatDto getCharacterHexaMatrixStatDto(String ocid) {
        return characterFeignClient.getCharacterHexamatrixStatDto(ocid);
    }

}
