package com.maple.mapleservice.dto.response.Character;

import java.util.List;

import com.maple.mapleservice.dto.model.character.ViewRanking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterViewRankingResponseDto {
	List<ViewRanking> ranking;
}
