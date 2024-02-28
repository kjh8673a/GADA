package com.maple.mapleservice.dto.response.Character;

import java.util.List;

import org.springframework.data.domain.Page;

import com.maple.mapleservice.dto.model.character.CharacterCombatPowerPageable;
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
	CharacterCombatPowerPageable pageable;
	int totalPages;
	long totalElements;
	boolean last;
	int size;
	int number;
	int numberOfElements;
	boolean first;
	boolean empty;

	public static CharacterCombatPowerRankingResponseDtoWrapper of(Page<CharacterCombatPowerRankingResponseDto> result, CharacterCombatPowerPageable pageable) {
		return CharacterCombatPowerRankingResponseDtoWrapper.builder()
			.content(result.getContent())
			.pageable(pageable)
			.totalPages(result.getTotalPages())
			.totalElements(result.getTotalElements())
			.last(result.isLast())
			.size(result.getSize())
			.number(result.getNumber())
			.numberOfElements(result.getNumberOfElements())
			.first(result.isFirst())
			.empty(result.isEmpty())
			.build();
	}
}
