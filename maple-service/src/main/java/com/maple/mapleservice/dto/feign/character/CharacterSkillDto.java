package com.maple.mapleservice.dto.feign.character;

import java.util.List;

import com.maple.mapleservice.dto.model.character.skill.SkillDesc;

import lombok.Getter;

@Getter
public class CharacterSkillDto {
	String character_class;
	List<SkillDesc> character_skill;
}
