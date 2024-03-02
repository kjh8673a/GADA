package com.dnf.dnfservice.dto.feign.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.CharacterBuff;
import com.dnf.dnfservice.dto.model.character.CharacterStatus;

import lombok.Getter;

@Getter
public class CharacterStatusDto {
	List<CharacterBuff> buff;
	List<CharacterStatus> status;
}
