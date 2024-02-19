package com.maple.mapleservice.dto.feign.character;

import java.util.List;

import com.maple.mapleservice.dto.model.character.skill.VMatrix;

import lombok.Getter;

@Getter
public class CharacterVMatrixDto {
	String character_class;
	List<VMatrix> character_v_core_equipment;
	int character_v_matrix_remain_slot_upgrade_point;
}
