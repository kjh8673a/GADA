package com.maple.mapleservice.dto.model.character.skill;

import java.util.List;

import lombok.Getter;

@Getter
public class HexaMatrix {
	String hexa_core_name;
	int hexa_core_level;
	String hexa_core_type;
	List<HexaLinkedSkill> linked_skill;
}
