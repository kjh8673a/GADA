package com.maple.mapleservice.dto.model.synergy;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SynergySkill {
	String skill_name;
	String skill_description;
	String skill_effect;
	String skill_icon;

	public static SynergySkill of(String skill_name, String skill_description, String skill_effect, String skill_icon) {
		return SynergySkill.builder()
			.skill_name(skill_name)
			.skill_description(skill_description)
			.skill_effect(skill_effect)
			.skill_icon(skill_icon)
			.build();
	}
}
