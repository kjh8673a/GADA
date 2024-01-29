package com.maple.mapleservice.dto.model.synergy;

import java.util.List;

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
public class OptionCharacter {
	String character_class;
	Long increase_combat_power;

	Integer cycle;
	List<String> skill_type;

	public static OptionCharacter of(SynergyCharacter synergyCharacter, Long increase_combat_power) {
		return OptionCharacter.builder()
			.character_class(synergyCharacter.getCharacter_class())
			.increase_combat_power(increase_combat_power)
			.cycle(synergyCharacter.getCycle())
			.skill_type(synergyCharacter.getSkill_type())
			.build();
	}
}
