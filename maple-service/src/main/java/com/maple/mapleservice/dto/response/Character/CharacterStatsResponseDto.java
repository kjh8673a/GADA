package com.maple.mapleservice.dto.response.Character;

import java.util.List;

import com.maple.mapleservice.dto.feign.character.CharacterAbilityDto;
import com.maple.mapleservice.dto.feign.character.CharacterCashItemDto;
import com.maple.mapleservice.dto.feign.character.CharacterItemDto;
import com.maple.mapleservice.dto.feign.character.CharacterPetDto;
import com.maple.mapleservice.dto.model.character.FinalStat;
import com.maple.mapleservice.dto.model.character.HyperStat;
import com.maple.mapleservice.dto.model.character.Symbol;
import com.maple.mapleservice.dto.model.character.stats.CharacterFinalStatDto;
import com.maple.mapleservice.dto.model.character.stats.CharacterHyperStatsDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterStatsResponseDto {
	CharacterFinalStatDto final_stats;
	CharacterHyperStatsDto hyper_stats;
	CharacterAbilityDto ability;

	public static CharacterStatsResponseDto of(CharacterFinalStatDto final_stats, CharacterHyperStatsDto hyper_stats, CharacterAbilityDto ability) {
		return CharacterStatsResponseDto.builder()
			.final_stats(final_stats)
			.hyper_stats(hyper_stats)
			.ability(ability)
			.build();
	}
}
