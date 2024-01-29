package com.maple.mapleservice.dto.response.synergy;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.MainCharacter;
import com.maple.mapleservice.dto.model.synergy.OptionCharacter;
import com.maple.mapleservice.dto.model.synergy.SelectedCharcter;

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
public class SynergyResponseDto {
	// main
	MainCharacter main_character;
	// selected
	List<SelectedCharcter> selected_characters;
	// options
	List<OptionCharacter> option_characters;

	public static SynergyResponseDto of(MainCharacter main_character, List<SelectedCharcter> selected_characters,
		List<OptionCharacter> option_characters) {
		return SynergyResponseDto.builder()
			.main_character(main_character)
			.selected_characters(selected_characters)
			.option_characters(option_characters)
			.build();
	}
}
