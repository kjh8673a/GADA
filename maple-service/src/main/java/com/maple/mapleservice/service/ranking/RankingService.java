package com.maple.mapleservice.service.ranking;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.maple.mapleservice.dto.response.Ranking.CharacterCombatPowerRankingResponseDto;

public interface RankingService {
	void addCharacterInformationFromRankingToDB(int world_type, int page);

	void addCharacterImageFromDB();

	Page<CharacterCombatPowerRankingResponseDto> getCombatPowerRanking(String world_name, String character_class, Pageable pageable);
}
