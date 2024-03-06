package com.dnf.dnfservice.dto.model.character.talisman;

import java.util.List;

import lombok.Getter;

@Getter
public class CharacterTalisman {
	TalismanInfo talisman;
	List<TalismanRune> runes;
}
