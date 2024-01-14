package com.maple.mapleservice.service.character;

import java.util.List;

import com.maple.mapleservice.dto.response.Character.CharacterExpHistoryResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;

public interface CharacterService {
    void addCharacterInformationToDB(String characterName);

    CharacterResponseDto getCharacterFromDB(String ocid);

    String getParentOcidByCharacterName(String characterName);

    List<CharacterResponseDto> findMainCharacter(String parentOcid);

    void addCharactersFromRanking(String characterName);

    List<CharacterExpHistoryResponseDto> getCharacterExpHistory(String ocid);
}
