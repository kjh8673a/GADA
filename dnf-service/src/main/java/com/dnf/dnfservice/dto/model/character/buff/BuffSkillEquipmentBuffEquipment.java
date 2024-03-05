package com.dnf.dnfservice.dto.model.character.buff;

import lombok.Getter;

@Getter
public class BuffSkillEquipmentBuffEquipment {
	String slotId;
	String slotName;
	String itemId;
	String itemName;
	String itemTypeId;
	String itemType;
	String itemTypeDetailId;
	String itemTypeDetail;
	Integer itemAvailableLevel;
	String itemRarity;
	String setItemId;
	String setItemName;
	Integer reinforce;
	String amplificationName;
	Integer refine;
	BuffSkillEquipmentBuffEquipmentEnchant enchant;
}
