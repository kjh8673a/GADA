package com.dnf.dnfservice.dto.feign.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.CharacterSearchInfo;

import lombok.Getter;

@Getter
public class CharacterSearchDto {
	List<CharacterSearchInfo> rows;
}
