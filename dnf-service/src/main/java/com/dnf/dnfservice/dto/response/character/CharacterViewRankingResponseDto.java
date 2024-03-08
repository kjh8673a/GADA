package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.CharacterViewRanking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterViewRankingResponseDto {
	List<CharacterViewRanking> ranking;

}
