package com.maple.mapleservice.service;


import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.feign.character.CharacterStatDto;
import com.maple.mapleservice.entity.character.HyperStat;

import java.util.List;

public interface CharacterService {
    String getOcidKey(String characterName);
    CharacterBasicDto getCharacterBasic(String ocid);
    Integer getCharacterPopularity(String ocid);
    CharacterStatDto getCharacterStat(String ocid);
    List<HyperStat> getCharacterHyperStat(String ocid);
}
