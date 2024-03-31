package com.dnf.dnfservice.dto.model.character.avatar;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.CharacterItemClone;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillAvatarEmblem;

import lombok.Getter;

@Getter
public class CharacterAvatar {
	String slotId;
	String slotName;
	String itemId;
	String itemName;
	String itemRarity;
	CharacterItemClone clone;
	String optionAbility;
	List<BuffSkillAvatarEmblem> emblems;

}
