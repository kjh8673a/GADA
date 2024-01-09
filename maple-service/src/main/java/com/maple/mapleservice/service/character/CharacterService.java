package com.maple.mapleservice.service.character;


import com.maple.mapleservice.dto.response.CharacterBasicInfoDto;
import com.maple.mapleservice.dto.response.CharacterItemAndStatDto;

public interface CharacterService {
    CharacterBasicInfoDto getCharacterBasicInfo(String characterName);
    CharacterItemAndStatDto getCharacterItemAndStat(String characterName);
}
