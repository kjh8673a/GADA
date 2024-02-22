package com.maple.mapleservice.repository.ranking;

import java.util.List;

import com.maple.mapleservice.dto.response.Ranking.GuildCombatPowerRankingResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.maple.mapleservice.dto.response.Ranking.CharacterCombatPowerRankingResponseDto;

public interface RankingCustomRepository {
	Page<CharacterCombatPowerRankingResponseDto> getCombatPowerRanking(String worldName, String characterClass, Pageable pageable);

	Page<GuildCombatPowerRankingResponseDto> getGuildCombatPowerRanking(String worldName, Pageable pageable);

	void combatPowerBatchUpdate(List<String> ocidsToBeUpdated);
}
