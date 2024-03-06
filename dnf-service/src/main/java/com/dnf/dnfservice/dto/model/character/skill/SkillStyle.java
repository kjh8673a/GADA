package com.dnf.dnfservice.dto.model.character.skill;

import java.util.List;

import lombok.Getter;

@Getter
public class SkillStyle {
	List<SkillDetail> active;
	List<SkillDetail> passive;
}
