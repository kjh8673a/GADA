package com.dnf.dnfservice.dto.model.character.equipment;

import java.util.List;

import lombok.Getter;

@Getter
public class EquipmentTrait {
	EquipmentTraitTotal total;
	EquipmentTraitCategory category;
	List<EquipmentTraitOption> options;
}
