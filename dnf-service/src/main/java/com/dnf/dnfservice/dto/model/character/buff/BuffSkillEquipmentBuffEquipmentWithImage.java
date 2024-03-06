package com.dnf.dnfservice.dto.model.character.buff;

import com.dnf.dnfservice.dto.response.character.CharacterBuffEquipmentResponseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BuffSkillEquipmentBuffEquipmentWithImage {
	String slotId;
	String slotName;
	String itemId;
	String itemName;
	String itemImage;
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

	public static BuffSkillEquipmentBuffEquipmentWithImage of(BuffSkillEquipmentBuffEquipment equipment) {
		return BuffSkillEquipmentBuffEquipmentWithImage.builder()
			.slotId(equipment.getSlotId())
			.slotName(equipment.getSlotName())
			.itemId(equipment.getItemId())
			.itemName(equipment.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + equipment.getItemId())
			.itemTypeId(equipment.getItemTypeId())
			.itemType(equipment.getItemType())
			.itemTypeDetailId(equipment.getItemTypeDetailId())
			.itemTypeDetail(equipment.getItemTypeDetail())
			.itemAvailableLevel(equipment.getItemAvailableLevel())
			.itemRarity(equipment.getItemRarity())
			.setItemId(equipment.getSetItemId())
			.setItemName(equipment.getSetItemName())
			.reinforce(equipment.getReinforce())
			.amplificationName(equipment.getAmplificationName())
			.refine(equipment.getRefine())
			.enchant(equipment.getEnchant())
			.build();
	}
}
