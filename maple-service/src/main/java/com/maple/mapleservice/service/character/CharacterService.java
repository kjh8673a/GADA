package com.maple.mapleservice.service.character;

import java.util.List;

import com.maple.mapleservice.dto.feign.character.CharacterLinkSkillDto;
import com.maple.mapleservice.dto.feign.character.CharacterSkillDto;
import com.maple.mapleservice.dto.response.Character.CharacterCompareResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterExpHistoryResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterHexaMatrixResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterItemResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;

import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterStatsResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterVMatrixResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterViewRankingResponseDto;

public interface CharacterService {
	CharacterBasicInfoResponseDto getCharacterBasicInfo(String characterName);

	void addCharacterInformationToDB(String characterName);
	void addCharacterInformationToDB(List<String> characterNames);

	CharacterResponseDto getCharacterFromDB(String ocid);

	String getParentOcidByCharacterName(String characterName);

	List<CharacterResponseDto> findMainCharacter(String parentOcid);

	void addCharactersFromRanking(String characterName);

	List<CharacterExpHistoryResponseDto> getCharacterExpHistory(String ocid);

	CharacterItemResponseDto getCharacterItem(String characterName);

	CharacterStatsResponseDto getCharacterStats(String characterName);

	CharacterVMatrixResponseDto getCharacterVMatrix(String characterName);

	CharacterSkillDto getCharacterHyperPassive(String characterName);

	CharacterLinkSkillDto getCharacterLinkSkill(String characterName);

	CharacterHexaMatrixResponseDto getCharacterHexaMatrix(String characterName);

	CharacterCompareResponseDto getCharacterCompare(String leftCharacterName, String rightCharacterName);

	CharacterBasicInfoResponseDto getCharacterBasicInfoForGuildMember(String characterName);

	void addCharacterViewCount(String ocid);

	CharacterViewRankingResponseDto getPopularCharacters();
}
