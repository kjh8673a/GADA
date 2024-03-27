package com.dnf.dnfservice.dto.model.character;

import com.dnf.dnfservice.dto.model.character.equipment.EquipmentBakal;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentCustomOption;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentEnchant;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentFixedOption;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentMachineRevolution;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentSkin;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentUpgrade;

import lombok.Getter;

@Getter
public class CharacterEqipment {
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
	EquipmentSkin skin;
	Integer reinforce;
	String itemGradeName;
	EquipmentEnchant enchant;
	String amplificationName;
	Integer refine;
	EquipmentBakal bakalInfo;
	EquipmentUpgrade upgradeInfo;
	EquipmentFixedOption fixedOption;
	boolean engraveName;
	EquipmentMachineRevolution machineRevolutionInfo;
	EquipmentCustomOption customOption;
}
