package com.dnf.dnfservice.dto.model.auction;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuctionSearchItemInfo {
	String itemId;
	String itemName;
	String itemTypeDetail;
	String itemImage;

	public static AuctionSearchItemInfo of(AuctionSearchItem item) {
		return AuctionSearchItemInfo.builder()
			.itemId(item.getItemId())
			.itemName(item.getItemName())
			.itemTypeDetail(item.getItemTypeDetail())
			.itemImage("https://img-api.neople.co.kr/df/items/" + item.getItemId())
			.build();
	}
}
