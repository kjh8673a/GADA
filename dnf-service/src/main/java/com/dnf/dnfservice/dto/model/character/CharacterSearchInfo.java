package com.dnf.dnfservice.dto.model.character;

import lombok.Getter;

@Getter
public class CharacterSearchInfo {
	String serverId;
	String characterId;
	String characterName;
	Integer level;
	String jobId;
	String jobGrowId;
	String jobName;
	String jobGrowName;
	Long fame;
}
