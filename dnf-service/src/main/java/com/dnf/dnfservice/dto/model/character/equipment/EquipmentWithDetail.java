package com.dnf.dnfservice.dto.model.character.equipment;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.model.character.CharacterEqipment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EquipmentWithDetail {
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
	ItemDetailDto detail;

	public static EquipmentWithDetail of(CharacterEqipment characterEqipment, ItemDetailDto itemDetailDto) {
		return EquipmentWithDetail.builder()
			.slotId(characterEqipment.getSlotId())
			.slotName(characterEqipment.getSlotName())
			.itemId(characterEqipment.getItemId())
			.itemName(characterEqipment.getItemName())
			.itemTypeId(characterEqipment.getItemTypeId())
			.itemType(characterEqipment.getItemType())
			.itemTypeDetailId(characterEqipment.getItemTypeDetailId())
			.itemTypeDetail(characterEqipment.getItemTypeDetail())
			.itemAvailableLevel(characterEqipment.getItemAvailableLevel())
			.itemRarity(characterEqipment.getItemRarity())
			.itemId(characterEqipment.getItemId())
			.itemName(characterEqipment.getItemName())
			.skin(characterEqipment.getSkin())
			.reinforce(characterEqipment.getReinforce())
			.itemGradeName(characterEqipment.getItemGradeName())
			.enchant(characterEqipment.getEnchant())
			.amplificationName(characterEqipment.getAmplificationName())
			.refine(characterEqipment.getRefine())
			.bakalInfo(characterEqipment.getBakalInfo())
			.upgradeInfo(characterEqipment.getUpgradeInfo())
			.fixedOption(characterEqipment.getFixedOption())
			.engraveName(characterEqipment.isEngraveName())
			.machineRevolutionInfo(characterEqipment.getMachineRevolutionInfo())
			.customOption(characterEqipment.getCustomOption())
			.detail(itemDetailDto)
			.build();
	}
}
