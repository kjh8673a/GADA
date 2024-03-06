package com.dnf.dnfservice.dto.response.character;

import com.dnf.dnfservice.dto.feign.character.CharacterBuffEquipmentDto;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillEquipment;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillEquipmentBuff;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterBuffEquipmentResponseDto {
	BuffSkillEquipmentBuff equipmentBuffSkill;

	public static CharacterBuffEquipmentResponseDto of(CharacterBuffEquipmentDto characterBuffEquipmentDto) {
		return CharacterBuffEquipmentResponseDto.builder()
			.equipmentBuffSkill(characterBuffEquipmentDto.getSkill().getBuff())
			.build();
	}
}
