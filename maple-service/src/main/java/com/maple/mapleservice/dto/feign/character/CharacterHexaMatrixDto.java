package com.maple.mapleservice.dto.feign.character;

import java.util.List;

import com.maple.mapleservice.dto.model.character.skill.HexaMatrix;

import lombok.Getter;

@Getter
public class CharacterHexaMatrixDto {
	List<HexaMatrix> character_hexa_core_equipment;
}
