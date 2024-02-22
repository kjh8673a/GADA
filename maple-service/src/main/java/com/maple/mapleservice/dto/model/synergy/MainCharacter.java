package com.maple.mapleservice.dto.model.synergy;

import java.util.List;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.character.skill.SkillDesc;

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
public class MainCharacter {
	// CharacterBasicDto
	String character_name;
	String world_name;
	String character_class;
	Integer character_level;
	String character_image;

	// getCharacterCombatPower
	String combat_power;

	// 계산
	Long increased_combat_power;

	// SynergyCharacter
	Integer cycle;
	List<String> skill_type;
	List<SynergySkill> skill_desc;

	public static MainCharacter of(CharacterBasicDto characterBasicDto, Long combat_power, Long increased_combat_power, SynergyCharacter synergyCharacter) {
		return MainCharacter.builder()
			.character_name(characterBasicDto.getCharacter_name())
			.world_name(characterBasicDto.getWorld_name())
			.character_class(characterBasicDto.getCharacter_class())
			.character_level(characterBasicDto.getCharacter_level())
			.character_image(characterBasicDto.getCharacter_image())
			.combat_power(String.valueOf(combat_power))
			.increased_combat_power(increased_combat_power)
			.cycle(synergyCharacter.getCycle())
			.skill_type(synergyCharacter.getSkill_type())
			.skill_desc(synergyCharacter.getSkill_desc())
			.build();
	}
}
