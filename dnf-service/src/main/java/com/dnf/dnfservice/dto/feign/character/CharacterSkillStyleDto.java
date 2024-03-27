package com.dnf.dnfservice.dto.feign.character;

import com.dnf.dnfservice.dto.model.character.skill.Skill;

import lombok.Getter;

@Getter
public class CharacterSkillStyleDto {
	String jobId;
	String jobGrowId;
	Skill skill;
}
