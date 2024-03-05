package com.dnf.dnfservice.dto.response.character;

import java.util.ArrayList;
import java.util.List;

import com.dnf.dnfservice.dto.model.character.buff.BuffSkillAvatarBuffAvatarWithImage;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillBuffSkillInfo;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillCreatureBuffCreatureWithImage;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillEquipmentBuffEquipmentWithImage;

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
	List<BuffSkillEquipmentBuffEquipmentWithImage> equipment;
	List<BuffSkillAvatarBuffAvatarWithImage> avatar;
	List<BuffSkillCreatureBuffCreatureWithImage> creature;

	public static CharacterBuffResponseDto of(CharacterBuffEquipmentResponseDto characterBuffEquipmentResponseDto,
		CharacterBuffAvatarResponseDto characterBuffAvatarResponseDto,
		CharacterBuffCreatureResponseDto characterBuffCreatureResponseDto) {

		List<BuffSkillEquipmentBuffEquipmentWithImage> equipment = new ArrayList<>();
		characterBuffEquipmentResponseDto.getEquipmentBuffSkill().getEquipment().stream().forEach(data -> {
			equipment.add(BuffSkillEquipmentBuffEquipmentWithImage.of(data));
		});

		List<BuffSkillAvatarBuffAvatarWithImage> avatar = new ArrayList<>();
		characterBuffAvatarResponseDto.getAvatarBuffSkill().getAvatar().stream().forEach(data -> {
			avatar.add(BuffSkillAvatarBuffAvatarWithImage.of(data));
		});

		List<BuffSkillCreatureBuffCreatureWithImage> creature = new ArrayList<>();
		characterBuffCreatureResponseDto.getCreatureBuffSkill().getCreature().stream().forEach(data -> {
			creature.add(BuffSkillCreatureBuffCreatureWithImage.of(data));
		});

		return CharacterBuffResponseDto.builder()
			.skillInfo(characterBuffEquipmentResponseDto.getEquipmentBuffSkill().getSkillInfo())
			.equipment(equipment)
			.avatar(avatar)
			.creature(creature)
			.build();
	}
}
