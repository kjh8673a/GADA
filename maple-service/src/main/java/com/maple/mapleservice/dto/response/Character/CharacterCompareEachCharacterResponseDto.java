package com.maple.mapleservice.dto.response.Character;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterCompareEachCharacterResponseDto {
	CharacterBasicInfoResponseDto character_basic_info;
	CharacterItemResponseDto character_item;
	CharacterStatsResponseDto character_stats;

	public static CharacterCompareEachCharacterResponseDto of(CharacterBasicInfoResponseDto character_basic_info,
		CharacterItemResponseDto character_item, CharacterStatsResponseDto character_stats) {
		return CharacterCompareEachCharacterResponseDto.builder()
			.character_basic_info(character_basic_info)
			.character_item(character_item)
			.character_stats(character_stats)
			.build();
	}
}
