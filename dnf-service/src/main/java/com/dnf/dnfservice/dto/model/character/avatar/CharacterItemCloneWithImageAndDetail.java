package com.dnf.dnfservice.dto.model.character.avatar;

import java.util.Optional;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.model.character.CharacterItemClone;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterItemCloneWithImageAndDetail {
	String itemId;
	String itemName;
	String itemImage;
	ItemDetailDto detail;


	public static CharacterItemCloneWithImageAndDetail of(CharacterItemClone clone, ItemDetailDto detail) {
		if(clone == null) {
			return null;
		}
		String itemImage = null;
		if(clone.getItemId() != null) {
			itemImage = "https://img-api.neople.co.kr/df/items/" + clone.getItemId();
		}
		return CharacterItemCloneWithImageAndDetail.builder()
			.itemId(clone.getItemId())
			.itemName(clone.getItemName())
			.itemImage(itemImage)
			.detail(detail)
			.build();
	}
}
