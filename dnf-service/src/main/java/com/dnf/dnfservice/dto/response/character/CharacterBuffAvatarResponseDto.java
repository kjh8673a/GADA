package com.dnf.dnfservice.dto.response.character;

import com.dnf.dnfservice.dto.feign.character.CharacterBuffAvatarDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBuffEquipmentDto;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillAvatar;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillAvatarBuff;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillEquipment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterBuffAvatarResponseDto {
	BuffSkillAvatarBuff avatarBuffSkill;

	public static CharacterBuffAvatarResponseDto of(CharacterBuffAvatarDto characterBuffAvatarDto) {
		return CharacterBuffAvatarResponseDto.builder()
			.avatarBuffSkill(characterBuffAvatarDto.getSkill().getBuff())
			.build();
	}
}
