package com.maple.mapleservice.dto.response.Character;

import java.util.List;

import com.maple.mapleservice.dto.feign.character.CharacterCashItemDto;
import com.maple.mapleservice.dto.feign.character.CharacterItemDto;
import com.maple.mapleservice.dto.feign.character.CharacterPetDto;
import com.maple.mapleservice.dto.model.character.Symbol;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterItemResponseDto {
	CharacterItemDto item;
	CharacterCashItemDto cash_item;
	CharacterPetDto pet;
	List<Symbol> symbols;

	public static CharacterItemResponseDto of(CharacterItemDto item, CharacterCashItemDto cash_item, CharacterPetDto pet,
		List<Symbol> symbols) {
		return CharacterItemResponseDto.builder()
			.item(item)
			.cash_item(cash_item)
			.pet(pet)
			.symbols(symbols)
			.build();
	}
}
