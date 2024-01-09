package com.maple.mapleservice.service.character;

import com.maple.mapleservice.dto.response.ResponseDto;

public interface CharacterService {
    void AddCharacterInformationToDB(String characterName);

    ResponseDto GetCharacterFromDB(String ocid);

    ResponseDto FindMainCharacter(String ocid);
}
