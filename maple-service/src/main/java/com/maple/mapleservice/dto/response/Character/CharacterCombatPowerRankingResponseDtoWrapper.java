package com.maple.mapleservice.dto.response.Character;

import java.util.List;

import com.maple.mapleservice.dto.response.Ranking.CharacterCombatPowerRankingResponseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterCombatPowerRankingResponseDtoWrapper {
	List<CharacterCombatPowerRankingResponseDto> content;

	public static CharacterCombatPowerRankingResponseDtoWrapper of(List<CharacterCombatPowerRankingResponseDto> content) {
		return CharacterCombatPowerRankingResponseDtoWrapper.builder()
			.content(content)
			.build();
	}
}
