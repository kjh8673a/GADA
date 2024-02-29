package com.dnf.dnfservice.dto.feign.character;

import lombok.Getter;

@Getter
public class CharacterBasicInfoDto {
	String characterId;
	String characterName;
	Integer level;
	String jobId;
	String jobGrowId;
	String jobName;
	String jobGrowName;
	String adventureName;
	String guildId;
	String guildName;
}
