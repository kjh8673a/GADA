package com.dnf.dnfservice.service.character;

import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.feign.character.CharacterStatusDto;

public interface CharacterApiService {
	CharacterSearchDto searchCharacters(String characterName);

	CharacterSearchDto searchCharacters(String serverId, String characterName);

	CharacterBasicInfoDto getCharacterBasicInfo(String serverId, String characterId);

	CharacterStatusDto getCharacterStatus(String serverId, String characterId);

	CharacterEquipmentDto getCharacterEquipment(String serverId, String characterId);
}
