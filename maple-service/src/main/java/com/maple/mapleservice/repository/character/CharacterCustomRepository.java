package com.maple.mapleservice.repository.character;

import java.util.List;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.ranking.Union;
import com.maple.mapleservice.entity.Character;

public interface CharacterCustomRepository {
	void batchCharacterInsert(List<Character> characterInsertList);

	void batchCharacterUpdate(List<Character> characterUpdateList);
}
