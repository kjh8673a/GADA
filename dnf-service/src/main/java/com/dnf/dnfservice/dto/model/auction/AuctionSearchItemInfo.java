package com.dnf.dnfservice.dto.model.auction;

import com.dnf.dnfservice.dto.model.item.SearchItem;

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
	String itemRarity;
	String itemType;
	String itemTypeDetail;
	String itemImage;
	boolean isInAuction;

	public static AuctionSearchItemInfo of(SearchItem item, boolean isInAuction) {
		return AuctionSearchItemInfo.builder()
			.itemId(item.getItemId())
			.itemName(item.getItemName())
			.itemRarity(item.getItemRarity())
			.itemType(item.getItemType())
			.itemTypeDetail(item.getItemTypeDetail())
			.itemImage("https://img-api.neople.co.kr/df/items/" + item.getItemId())
			.isInAuction(isInAuction)
			.build();
	}
}
