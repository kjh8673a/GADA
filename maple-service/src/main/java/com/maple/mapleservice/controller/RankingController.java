package com.maple.mapleservice.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.maple.mapleservice.dto.response.Ranking.CharacterCombatPowerRankingResponseDto;
import com.maple.mapleservice.dto.response.SuccessResponse;
import com.maple.mapleservice.service.ranking.RankingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/maple-service/ranking")
public class RankingController {
	private final RankingService rankingService;

	@RequestMapping("/combatPowerRanking")
	public ResponseEntity<SuccessResponse> getCombatPowerRanking(@RequestParam(defaultValue = "1") int page,
		@RequestParam String world_name, @RequestParam String character_class) {

		PageRequest pageable = PageRequest.of(page - 1, 20);
		Page<CharacterCombatPowerRankingResponseDto> combatPowerRanking = rankingService.getCombatPowerRanking(
			world_name, character_class, pageable);

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(combatPowerRanking));
	}
}
