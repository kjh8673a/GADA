package com.dnf.dnfservice.dto.model.character.skill;

import lombok.Getter;

@Getter
public class SkillDetail {
	String skillId;
	String name;
	Integer level;
	Integer requiredLevel;
	String costType;
}
