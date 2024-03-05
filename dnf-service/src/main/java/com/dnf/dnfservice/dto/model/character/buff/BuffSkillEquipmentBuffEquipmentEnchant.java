package com.dnf.dnfservice.dto.model.character.buff;

import java.util.List;

import lombok.Getter;

@Getter
public class BuffSkillEquipmentBuffEquipmentEnchant {
	List<BuffSkillEquipmentBuffEquipmentEnchantReinforce> reinforceSkill;
	List<BuffSkillEquipmentBuffEquipmentEnchantStatus> status;
}
