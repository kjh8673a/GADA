package com.dnf.dnfservice.dto.feign.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.CharacterItemClone;
import com.dnf.dnfservice.dto.model.character.creature.CreatureArtifact;
import com.dnf.dnfservice.dto.response.character.CharacterCreature;

import lombok.Getter;

@Getter
public class CharacterCreatureDto {
	CharacterCreature creature;

}
