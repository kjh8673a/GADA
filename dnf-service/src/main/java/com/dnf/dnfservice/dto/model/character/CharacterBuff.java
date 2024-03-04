package com.dnf.dnfservice.dto.model.character;

import java.util.List;

import lombok.Getter;

@Getter
public class CharacterBuff {
	String name;
	Integer level;
	List<CharacterStatus> status;
}
