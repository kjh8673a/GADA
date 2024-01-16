package com.maple.mapleservice.dto.response.Character;

import com.maple.mapleservice.entity.CharacterExpHistory;

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
public class CharacterExpHistoryResponseDto {
	private String ocid;
	private String date;
	private Long character_level;
	private Long exp;
	private String character_exp_rate;

	public static CharacterExpHistoryResponseDto of(CharacterExpHistory characterExpHistory) {
		return CharacterExpHistoryResponseDto.builder()
			.ocid(characterExpHistory.getOcid())
			.date(characterExpHistory.getDate())
			.character_level(characterExpHistory.getCharacter_level())
			.exp(characterExpHistory.getExp())
			.character_exp_rate(characterExpHistory.getCharacter_exp_rate())
			.build();
	}
}
