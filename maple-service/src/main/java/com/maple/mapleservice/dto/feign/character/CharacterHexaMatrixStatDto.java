package com.maple.mapleservice.dto.feign.character;

import java.util.List;

import com.maple.mapleservice.dto.model.character.skill.HexaStatCore;

import lombok.Getter;

@Getter
public class CharacterHexaMatrixStatDto {
	List<HexaStatCore> character_hexa_stat_core;
}
