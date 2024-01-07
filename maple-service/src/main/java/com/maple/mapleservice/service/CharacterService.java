package com.maple.mapleservice.service;


import com.maple.mapleservice.dto.feign.character.CharacterStatDto;

public interface CharacterService {
    String getOcidKey(String characterName);
    CharacterStatDto getCharacterStat(String ocid);
}
