package com.maple.mapleservice.dto.response.Character;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.maple.mapleservice.dto.feign.character.CharacterLinkSkillDto;
import com.maple.mapleservice.dto.feign.character.CharacterSkillDto;
import com.maple.mapleservice.dto.response.synergy.SynergyResponseDto;
import com.maple.mapleservice.dto.response.union.UnionArtifactResponseDto;
import com.maple.mapleservice.dto.response.union.UnionInfoResponseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CharacterUpdateResponseDto {
	CharacterBasicInfoResponseDto basicInfo;
	List<CharacterExpHistoryResponseDto> expHistory;

	CharacterItemResponseDto item;
	CharacterStatsResponseDto stats;

	UnionInfoResponseDto unionInfo;
	UnionArtifactResponseDto unionArtifact;

	CharacterVMatrixResponseDto VMatrix;
	CharacterSkillDto hyperPassive;
	CharacterLinkSkillDto linkSkill;
	CharacterHexaMatrixResponseDto hexaMatrix;

	List<CharacterResponseDto> findMainCharacter;

	SynergyResponseDto synergy;
}
