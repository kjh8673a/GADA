package com.maple.mapleservice.service.character;


import com.maple.mapleservice.dto.feign.character.*;
import com.maple.mapleservice.dto.model.character.stats.CharacterFinalStatDto;
import com.maple.mapleservice.dto.model.character.stats.CharacterHyperStatsDto;

public interface CharacterApiService {
    String getOcidKey(String characterName);

    CharacterBasicDto getCharacterBasic(String ocid);

    Integer getCharacterPopularity(String ocid);

    CharacterFinalStatDto getCharacterStat(String ocid);

    CharacterHyperStatsDto getCharacterHyperStat(String ocid);

    CharacterAbilityDto getCharacterAbility(String ocid);

    CharacterItemDto getCharacterItem(String ocid);

    CharacterCashItemDto getCharacterCashItem(String ocid);

    CharacterSymbolDto getCharacterSymbol(String ocid);

    CharacterPetDto getCharacterPet(String ocid);

    CharacterBasicDto getCharacterBasicCustomDate(String ocid, String date);

    CharacterVMatrixDto getCharacterVMatrixDto(String ocid);

    CharacterSkillDto getCharacterSkill(String ocid, String character_skill_grade);

    CharacterLinkSkillDto getCharacterLinkSkill(String ocid);

    CharacterHexaMatrixDto getCharacterHexaMatrix(String ocid);
}
