package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.buff.BuffSkillAvatarBuffAvatar;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillBuffSkillInfo;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillCreatureBuffCreature;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillEquipmentBuffEquipment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterBuffResponseDto {
	BuffSkillBuffSkillInfo skillInfo;
	List<BuffSkillEquipmentBuffEquipment> equipment;
	List<BuffSkillAvatarBuffAvatar> avatar;
	List<BuffSkillCreatureBuffCreature> creature;

	public static CharacterBuffResponseDto of(CharacterBuffEquipmentResponseDto characterBuffEquipmentResponseDto, CharacterBuffAvatarResponseDto characterBuffAvatarResponseDto, CharacterBuffCreatureResponseDto characterBuffCreatureResponseDto) {
		return CharacterBuffResponseDto.builder()
			.skillInfo(characterBuffEquipmentResponseDto.getEquipmentBuffSkill().getSkillInfo())
			.equipment(characterBuffEquipmentResponseDto.getEquipmentBuffSkill().getEquipment())
			.avatar(characterBuffAvatarResponseDto.getAvatarBuffSkill().getAvatar())
			.creature(characterBuffCreatureResponseDto.getCreatureBuffSkill().getCreature())
			.build();
	}
}
