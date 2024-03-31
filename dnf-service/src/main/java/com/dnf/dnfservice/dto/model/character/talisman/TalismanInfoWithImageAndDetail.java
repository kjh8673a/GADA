package com.dnf.dnfservice.dto.model.character.talisman;

import java.util.List;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TalismanInfoWithImageAndDetail {
	Integer slotNo;
	String itemId;
	String itemName;
	String itemImage;
	ItemDetailDto detail;
	List<String> runeTypes;

	public static TalismanInfoWithImageAndDetail of(TalismanInfo talisman, ItemDetailDto detail) {
		return TalismanInfoWithImageAndDetail.builder()
			.slotNo(talisman.getSlotNo())
			.itemId(talisman.getItemId())
			.itemName(talisman.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + talisman.getItemId())
			.detail(detail)
			.runeTypes(talisman.runeTypes)
			.build();
	}
}
