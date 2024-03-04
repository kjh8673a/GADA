package com.dnf.dnfservice.dto.model.character.equipment;

import java.util.List;

import lombok.Getter;

@Getter
public class EquipmentCustomOption {
	Double damage;
	Integer buff;
	Integer level;
	Integer exp;
	List<BakalOption> options;
}
