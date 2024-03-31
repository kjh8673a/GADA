package com.dnf.dnfservice.dto.model.character.equipment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EquipmentSkinWithImage {
	String itemId;
	String itemName;
	String itemImage;
	String itemRarity;

	public static EquipmentSkinWithImage of(EquipmentSkin skin) {
		if(skin == null) {
			return null;
		}
		return EquipmentSkinWithImage.builder()
			.itemId(skin.getItemId())
			.itemName(skin.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + skin.getItemId())
			.itemRarity(skin.getItemRarity())
			.build();
	}

}
