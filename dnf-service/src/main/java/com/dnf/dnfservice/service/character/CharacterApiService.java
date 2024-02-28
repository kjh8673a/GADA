package com.dnf.dnfservice.service.character;

import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;

public interface CharacterApiService {
	CharacterSearchDto searchCharacters(String characterName);
}
