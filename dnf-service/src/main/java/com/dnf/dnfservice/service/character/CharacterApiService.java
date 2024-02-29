package com.dnf.dnfservice.service.character;

import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;

public interface CharacterApiService {
	CharacterSearchDto searchCharacters(String characterName);

	CharacterSearchDto searchCharacters(String serverId, String characterName);

	CharacterBasicInfoDto getCharacterBasicInfo(String serverId, String characterId);
}
