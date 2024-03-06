package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.talisman.CharacterTalismanForResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterTalismanResponseDto {
	List<CharacterTalismanForResponse> talismans;

	public static CharacterTalismanResponseDto of(List<CharacterTalismanForResponse> talismans) {
		if(talismans.size() == 0) {
			return null;
		}

		return CharacterTalismanResponseDto.builder()
			.talismans(talismans)
			.build();
	}
}
