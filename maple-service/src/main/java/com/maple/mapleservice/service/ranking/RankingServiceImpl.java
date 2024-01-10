package com.maple.mapleservice.service.ranking;

import org.springframework.stereotype.Service;

import com.maple.mapleservice.service.character.CharacterService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RankingServiceImpl implements RankingService {
	private final RankingApiService rankingApiService;
	private final CharacterService characterService;

	@Override
	public void addCharacterInformationFromRankingToDB(int world_type, int page) {
		rankingApiService.getRankingOverall(world_type, page).stream()
			.forEach(o -> {
				characterService.addCharactersFromRanking(o.getCharacter_name());
			});
	}
}
