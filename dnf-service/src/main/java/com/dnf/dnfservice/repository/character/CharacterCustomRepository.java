package com.dnf.dnfservice.repository.character;

import java.util.List;

import com.dnf.dnfservice.dto.response.character.CharacterInformationResponseDto;

public interface CharacterCustomRepository {
	void batchCharacterInsert(List<CharacterInformationResponseDto> characterInsertList);

	void batchCharacterUpdate(List<CharacterInformationResponseDto> characterUpdateList);
}
