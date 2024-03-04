package com.dnf.dnfservice.dto.response.character;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterInformationResponseDto {
	LocalDateTime updatedTime;
	CharacterBasicInfoResponseDto basic;
	CharacterStatResponseDto stat;
	CharacterEquipmentResponseDto equipment;

	public static CharacterInformationResponseDto of(CharacterBasicInfoResponseDto basic, CharacterStatResponseDto stat, CharacterEquipmentResponseDto equipment) {
		return CharacterInformationResponseDto.builder()
			.updatedTime(LocalDateTime.now())
			.basic(basic)
			.stat(stat)
			.equipment(equipment)
			.build();
	}


}
