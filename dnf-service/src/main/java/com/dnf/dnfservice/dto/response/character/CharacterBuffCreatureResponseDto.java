package com.dnf.dnfservice.dto.response.character;

import com.dnf.dnfservice.dto.feign.character.CharacterBuffCreatureDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBuffEquipmentDto;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillCreatureBuff;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillEquipmentBuff;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterBuffCreatureResponseDto {
	BuffSkillCreatureBuff creatureBuffSkill;

	public static CharacterBuffCreatureResponseDto of(CharacterBuffCreatureDto characterBuffCreatureDto) {
		return CharacterBuffCreatureResponseDto.builder()
			.creatureBuffSkill(characterBuffCreatureDto.getSkill().getBuff())
			.build();
	}
}
