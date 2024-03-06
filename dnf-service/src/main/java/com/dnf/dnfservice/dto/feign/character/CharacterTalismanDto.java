package com.dnf.dnfservice.dto.feign.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.talisman.CharacterTalisman;

import lombok.Getter;

@Getter
public class CharacterTalismanDto {
	List<CharacterTalisman> talismans;
}
