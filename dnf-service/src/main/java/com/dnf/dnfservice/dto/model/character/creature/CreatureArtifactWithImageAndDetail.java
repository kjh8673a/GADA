package com.dnf.dnfservice.dto.model.character.creature;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreatureArtifactWithImageAndDetail {
	String slotColor;
	String itemId;
	String itemName;
	String itemImage;
	Integer itemAvailableLevel;
	String itemRarity;
	ItemDetailDto detail;

	public static CreatureArtifactWithImageAndDetail of(CreatureArtifact artifact, ItemDetailDto detail) {
		String itemImage = null;
		if(artifact.getItemId() != null) {
			itemImage = "https://img-api.neople.co.kr/df/items/" + artifact.getItemId();
		}

		return CreatureArtifactWithImageAndDetail.builder()
			.slotColor(artifact.getSlotColor())
			.itemId(artifact.getItemId())
			.itemName(artifact.getItemName())
			.itemImage(itemImage)
			.itemAvailableLevel(artifact.getItemAvailableLevel())
			.itemRarity(artifact.getItemRarity())
			.detail(detail)
			.build();
	}
}
