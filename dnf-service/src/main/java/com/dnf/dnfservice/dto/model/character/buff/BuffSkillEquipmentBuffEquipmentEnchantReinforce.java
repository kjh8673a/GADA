package com.dnf.dnfservice.dto.model.character.buff;

import java.util.List;

import lombok.Getter;

@Getter
public class BuffSkillEquipmentBuffEquipmentEnchantReinforce {
	String jobId;
	String jobName;
	List<BuffSkillEquipmentBuffEquipmentEnchantReinforceSkill> skills;
}
