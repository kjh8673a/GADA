package com.maple.mapleservice.dto.response.union;

import java.util.List;

import com.maple.mapleservice.dto.feign.character.CharacterAbilityDto;
import com.maple.mapleservice.dto.model.character.stats.CharacterFinalStatDto;
import com.maple.mapleservice.dto.model.character.stats.CharacterHyperStatsDto;
import com.maple.mapleservice.dto.model.union.UnionBlock;
import com.maple.mapleservice.dto.model.union.UnionInnerStat;
import com.maple.mapleservice.dto.response.Character.CharacterStatsResponseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UnionInfoResponseDto {
	int union_level;
	String union_grade;
	List<String> union_raider_stat;
	List<String> total_union_raider_stat;
	List<String> union_occupied_stat;
	List<UnionBlock> union_block;
	List<UnionInnerStat> union_inner_stat;

	public static UnionInfoResponseDto of(int union_level, String union_grade, List<String> union_raider_stat,
		List<String> total_union_raider_stat, List<String> union_occupied_stat, List<UnionBlock> union_block,
		List<UnionInnerStat> union_inner_stat) {
		return UnionInfoResponseDto.builder()
			.union_level(union_level)
			.union_grade(union_grade)
			.union_raider_stat(union_raider_stat)
			.total_union_raider_stat(total_union_raider_stat)
			.union_occupied_stat(union_occupied_stat)
			.union_block(union_block)
			.union_inner_stat(union_inner_stat)
			.build();
	}
}
