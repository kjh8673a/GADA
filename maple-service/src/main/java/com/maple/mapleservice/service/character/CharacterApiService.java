package com.maple.mapleservice.service.character;


import com.maple.mapleservice.dto.feign.character.*;
import com.maple.mapleservice.dto.model.character.HyperStat;

import java.util.List;

public interface CharacterApiService {
    String getOcidKey(String characterName);

    CharacterBasicDto getCharacterBasic(String ocid);

    Integer getCharacterPopularity(String ocid);

    CharacterStatDto getCharacterStat(String ocid);

    List<HyperStat> getCharacterHyperStat(String ocid);

    CharacterAbilityDto getCharacterAbility(String ocid);

    CharacterItemDto getCharacterItem(String ocid);

    CharacterCashItemDto getCharacterCashItem(String ocid);

    CharacterSymbolDto getCharacterSymbol(String ocid);

    CharacterPetDto getCharacterPet(String ocid);
}
