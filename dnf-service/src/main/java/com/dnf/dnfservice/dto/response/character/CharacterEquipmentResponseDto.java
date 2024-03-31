package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.equipment.EquipmentSetItem;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentWithDetail;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentTrait;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterEquipmentResponseDto {
	List<EquipmentWithDetail> equipment;
	List<EquipmentSetItem> setItemInfo;
	EquipmentTrait equipmentTrait;

	public static CharacterEquipmentResponseDto of(List<EquipmentWithDetail> equipment, List<EquipmentSetItem> setItemInfo, EquipmentTrait equipmentTrait) {
		return CharacterEquipmentResponseDto.builder()
			.equipment(equipment)
			.setItemInfo(setItemInfo)
			.equipmentTrait(equipmentTrait)
			.build();
	}
}
