package com.dnf.dnfservice.dto.feign.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.CharacterEqipment;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentSetItem;

import lombok.Getter;

@Getter
public class CharacterEquipmentDto {
	List<CharacterEqipment> equipment;
	List<EquipmentSetItem> setItemInfo;
}
