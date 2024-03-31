package com.dnf.dnfservice.dto.model.item;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.equipment.EnchantReinforceSkill;

import lombok.Getter;

@Getter
public class ItemReinforceSkill {
	String jobName;
	String jobId;
	List<EnchantReinforceSkill> skills;
}
