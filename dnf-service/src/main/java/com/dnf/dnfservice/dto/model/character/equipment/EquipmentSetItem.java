package com.dnf.dnfservice.dto.model.character.equipment;

import java.util.List;

import lombok.Getter;

@Getter
public class EquipmentSetItem {
	String setItemId;
	String setItemName;
	List<SetItemSlotInfo> slotInfo;
	Integer activeSetNo;
}
