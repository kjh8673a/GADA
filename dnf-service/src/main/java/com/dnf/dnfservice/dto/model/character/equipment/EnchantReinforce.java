package com.dnf.dnfservice.dto.model.character.equipment;

import java.util.List;

import lombok.Getter;

@Getter
public class EnchantReinforce {
	String jobId;
	String jobName;
	List<EnchantReinforceSkill> skills;
}
