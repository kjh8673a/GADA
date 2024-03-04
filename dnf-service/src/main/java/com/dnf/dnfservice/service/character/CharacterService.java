package com.dnf.dnfservice.service.character;

import java.util.List;

import com.dnf.dnfservice.dto.response.character.CharacterBasicInfoResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterEquipmentResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterInformationResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterSearchResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterStatResponseDto;

public interface CharacterService {
	List<CharacterSearchResponseDto> searchCharacters(String characterName);

	CharacterInformationResponseDto getCharacterInformation(String serverName, String characterName);

	void removeCharacterInformation(String serverName, String characterName);

	CharacterBasicInfoResponseDto getCharacterBasicInfo(String serverName, String characterName);

	CharacterStatResponseDto getCharacterStat(String serverName, String characterName);

	CharacterEquipmentResponseDto getCharacterEquipment(String serverName, String characterName);
}
