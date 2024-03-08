package com.dnf.dnfservice.dto.response.character;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

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

		BuffSkillBuffSkillInfo skillInfo = null;
		if(characterBuffEquipmentResponseDto.getEquipmentBuffSkill() != null) {
			skillInfo = characterBuffEquipmentResponseDto.getEquipmentBuffSkill().getSkillInfo();
		}else if(characterBuffAvatarResponseDto.getAvatarBuffSkill() != null) {
			skillInfo = characterBuffAvatarResponseDto.getAvatarBuffSkill().getSkillInfo();
		}else if(characterBuffCreatureResponseDto.getCreatureBuffSkill() != null) {
			skillInfo = characterBuffCreatureResponseDto.getCreatureBuffSkill().getSkillInfo();
		}

		if(skillInfo == null) {
			return null;
		}

		List<BuffSkillEquipmentBuffEquipmentWithImage> equipment = new ArrayList<>();
		if(characterBuffEquipmentResponseDto.getEquipmentBuffSkill() != null) {
			Optional.ofNullable(characterBuffEquipmentResponseDto.getEquipmentBuffSkill().getEquipment())
				.map(Collection::stream)
				.orElseGet(Stream::empty).forEach(data -> equipment.add(BuffSkillEquipmentBuffEquipmentWithImage.of(data)));
		}
		List<BuffSkillAvatarBuffAvatarWithImage> avatar = new ArrayList<>();
		if(characterBuffAvatarResponseDto.getAvatarBuffSkill() != null) {
			Optional.ofNullable(characterBuffAvatarResponseDto.getAvatarBuffSkill().getAvatar())
				.map(Collection::stream)
				.orElseGet(Stream::empty).forEach(data -> avatar.add(BuffSkillAvatarBuffAvatarWithImage.of(data)));
		}


		List<BuffSkillCreatureBuffCreatureWithImage> creature = new ArrayList<>();
		if(characterBuffCreatureResponseDto.getCreatureBuffSkill() != null) {
			Optional.ofNullable(characterBuffCreatureResponseDto.getCreatureBuffSkill().getCreature())
				.map(Collection::stream)
				.orElseGet(Stream::empty).forEach(data -> creature.add(BuffSkillCreatureBuffCreatureWithImage.of(data)));
		}

		return CharacterBuffResponseDto.builder()
			.skillInfo(skillInfo)
			.equipment(equipment)
			.avatar(avatar)
			.creature(creature)
			.build();
	}
}
