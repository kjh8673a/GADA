package com.dnf.dnfservice.dto.model.character.buff;

import java.util.List;

import lombok.Getter;

@Getter
public class BuffSkillAvatarBuffAvatar {
	String slotId;
	String slotName;
	String itemId;
	String itemName;
	String itemRarity;
	String cloneAvatarName;
	String optionAbility;
	List<BuffSkillAvatarEmblem> emblems;
}
