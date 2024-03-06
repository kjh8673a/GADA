package com.dnf.dnfservice.dto.model.character.creature;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.CharacterItemClone;
import com.dnf.dnfservice.dto.model.character.creature.CreatureArtifact;

import lombok.Getter;

@Getter
public class CharacterCreature {
	String itemId;
	String itemName;
	String itemRarity;
	CharacterItemClone clone;
	List<CreatureArtifact> artifact;
}
