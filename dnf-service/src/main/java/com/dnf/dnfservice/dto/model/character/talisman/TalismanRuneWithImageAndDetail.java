package com.dnf.dnfservice.dto.model.character.talisman;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TalismanRuneWithImageAndDetail {
	Integer slotNo;
	String itemId;
	String itemName;
	String itemImage;
	ItemDetailDto detail;

	public static TalismanRuneWithImageAndDetail of(TalismanRune rune, ItemDetailDto detail) {
		return TalismanRuneWithImageAndDetail.builder()
			.slotNo(rune.getSlotNo())
			.itemId(rune.getItemId())
			.itemName(rune.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + rune.getItemId())
			.detail(detail)
			.build();
	}

}
