package com.dnf.dnfservice.dto.feign.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.CharacterBuff;
import com.dnf.dnfservice.dto.model.character.CharacterStatus;

import lombok.Getter;

@Getter
public class CharacterStatusDto {
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
	List<CharacterBuff> buff;
	List<CharacterStatus> status;
}
