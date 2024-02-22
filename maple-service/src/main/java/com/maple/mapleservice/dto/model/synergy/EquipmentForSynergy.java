package com.maple.mapleservice.dto.model.synergy;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class EquipmentForSynergy {
	Double max_hp_plus;
	Double max_hp_percent;
	Double attack_power_percent;
	Double magic_power_percent;
	String weapon_type;
	Integer weapon_level;
}
