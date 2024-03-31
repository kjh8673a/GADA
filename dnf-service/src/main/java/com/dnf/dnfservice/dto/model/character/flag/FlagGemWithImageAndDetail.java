package com.dnf.dnfservice.dto.model.character.flag;

import java.util.List;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.model.character.avatar.CharacterItemCloneWithImageAndDetail;
import com.dnf.dnfservice.dto.model.character.creature.CharacterCreature;
import com.dnf.dnfservice.dto.model.character.creature.CreatureArtifactWithImageAndDetail;
import com.dnf.dnfservice.dto.response.character.CharacterCreatureResponseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FlagGemWithImageAndDetail {
	Integer slotNo;
	String itemId;
	String itemName;
	String itemImage;
	String itemRarity;
	ItemDetailDto detail;

	public static FlagGemWithImageAndDetail of(FlagGem flagGem, ItemDetailDto detail) {
		String itemImage = null;
		if(flagGem.getItemId() != null) {
			itemImage = "https://img-api.neople.co.kr/df/items/" + flagGem.getItemId();
		}

		return FlagGemWithImageAndDetail.builder()
			.slotNo(flagGem.getSlotNo())
			.itemId(flagGem.getItemId())
			.itemName(flagGem.getItemName())
			.itemImage(itemImage)
			.itemRarity(flagGem.getItemRarity())
			.detail(detail)
			.build();
	}
}
