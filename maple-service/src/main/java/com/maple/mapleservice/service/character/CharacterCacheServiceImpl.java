package com.maple.mapleservice.service.character;

import org.springframework.stereotype.Service;

import com.maple.mapleservice.service.union.UnionService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class CharacterCacheServiceImpl implements CharacterCacheService {
	private final CharacterService characterService;
	private final UnionService unionService;

	@Override
	public void updateCharacterCache(String characterName) {
		characterService.getCharacterBasicInfo(characterName);
		// 장비, 스탯
		characterService.getCharacterItem(characterName);
		characterService.getCharacterStats(characterName);

		// 유니온
		unionService.getUnionInfoResponseDto(characterName);
		unionService.getUnionArtifactResponseDto(characterName);

		// 스킬
		characterService.getCharacterVMatrix(characterName);
		characterService.getCharacterHyperPassive(characterName);
		characterService.getCharacterLinkSkill(characterName);
		characterService.getCharacterHexaMatrix(characterName);
	}

	@Override
	public void deleteCharacterCache(String characterName) {
		characterService.deleteCharacterBasicInfo(characterName);
		characterService.deleteCharacterItem(characterName);
		characterService.deleteCharacterStats(characterName);
		characterService.deleteCharacterVMatrix(characterName);
		characterService.deleteCharacterHyperPassive(characterName);
		characterService.deleteCharacterLinkSkill(characterName);
		characterService.deleteCharacterHexaMatrix(characterName);
		unionService.deleteUnionInfoResponseDto(characterName);
		unionService.deleteUnionArtifactResponseDto(characterName);
	}
}
