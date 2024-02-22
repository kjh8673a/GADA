package com.maple.mapleservice.dto.model.character;

import org.springframework.data.domain.Pageable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Data
public class CharacterCombatPowerPageable {
	int pageNumber;
	int pageSize;
	long offset;
	boolean unpaged;
	boolean paged;

	public static CharacterCombatPowerPageable of(Pageable pageable) {
		return CharacterCombatPowerPageable.builder()
			.pageNumber(pageable.getPageNumber())
			.pageSize(pageable.getPageSize())
			.offset(pageable.getOffset())
			.unpaged(pageable.isUnpaged())
			.paged(pageable.isPaged())
			.build();
	}


}
