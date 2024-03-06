package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.avatar.CharacterAvatarWithImageAndDetail;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterInformationResponseDto {
	CharacterBasicInfoResponseDto basic;
	CharacterStatResponseDto stat;
	CharacterEquipmentResponseDto equipment;
	CharacterBuffResponseDto buff;
	CharacterSkillResponseDto skill;
	List<CharacterAvatarWithImageAndDetail> avatar;
	CharacterCreatureResponseDto creature;
	CharacterFlagResponseDto flag;
	CharacterTalismanResponseDto talisman;

	public static CharacterInformationResponseDto of(CharacterBasicInfoResponseDto basic, CharacterStatResponseDto stat,
		CharacterEquipmentResponseDto equipment, CharacterBuffResponseDto buff, CharacterSkillResponseDto skill,
		CharacterAvatarResponseDto avatar, CharacterCreatureResponseDto creature, CharacterFlagResponseDto flag, CharacterTalismanResponseDto talisman) {
		return CharacterInformationResponseDto.builder()
			.basic(basic)
			.stat(stat)
			.equipment(equipment)
			.buff(buff)
			.skill(skill)
			.avatar(avatar.getAvatar())
			.creature(creature)
			.flag(flag)
			.talisman(talisman)
			.build();
	}

}
