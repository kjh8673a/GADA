package com.maple.mapleservice.dto.response.Character;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterCompareResponseDto {
	CharacterCompareEachCharacterResponseDto left_character;
	CharacterCompareEachCharacterResponseDto right_character;

	public static CharacterCompareResponseDto of(CharacterCompareEachCharacterResponseDto left_character,
		CharacterCompareEachCharacterResponseDto right_character) {
		return CharacterCompareResponseDto.builder()
			.left_character(left_character)
			.right_character(right_character)
			.build();
	}
}
