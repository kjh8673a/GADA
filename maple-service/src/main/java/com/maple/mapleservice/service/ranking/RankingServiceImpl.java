package com.maple.mapleservice.service.ranking;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.response.Ranking.CharacterCombatPowerRankingResponseDto;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.repository.ranking.RankingCustomRepository;
import com.maple.mapleservice.service.character.CharacterApiService;
import com.maple.mapleservice.service.character.CharacterService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RankingServiceImpl implements RankingService {
	private final RankingApiService rankingApiService;
	private final CharacterService characterService;
	private final CharacterRepository characterRepository;
	private final CharacterApiService characterApiService;
	private final RankingCustomRepository rankingCustomRepository;

	@Override
	public void addCharacterInformationFromRankingToDB(int world_type, int page) {
		rankingApiService.getRankingOverall(world_type, page).stream()
			.forEach(o -> {
				characterService.addCharactersFromRanking(o.getCharacter_name());
			});
	}

	@Override
	public void addCharacterImageFromDB() {
		List<Character> characterList = characterRepository.findNotHaveCharacterImage();

		characterList.stream().forEach(character -> {
			if(character.getCharacter_image() == null || character.getCharacter_image().isBlank()) {
				CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(character.getOcid());
				try {
					Thread.sleep(3000);
				} catch (InterruptedException e) {
					throw new RuntimeException(e);
				}
				character.setCharacter_image(characterBasicDto.getCharacter_image());
				characterRepository.save(character);
			}
		});
	}

	@Override
	public Page<CharacterCombatPowerRankingResponseDto> getCombatPowerRanking(String world_name, String character_class,
		Pageable pageable) {

		Page<CharacterCombatPowerRankingResponseDto> result = rankingCustomRepository.getCombatPowerRanking(world_name, character_class, pageable);

		return result;
	}
}
