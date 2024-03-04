package com.dnf.dnfservice.dto.model.character.equipment;

import java.util.List;


import lombok.Getter;

@Getter
public class EquipmentEnchant {
	List<EnchantReinforce> reinforceSkill;
	List<EnchantStatus> status;
}
