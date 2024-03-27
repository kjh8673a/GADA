package com.dnf.dnfservice.dto.model.auction;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.model.item.SearchItem;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuctionViewRanking {
	int rank;
	String itemId;
	String itemName;
	String itemRarity;
	String itemType;
	String itemTypeDetail;
	String itemImage;

	public static AuctionViewRanking of(int rank, ItemDetailDto info) {
		return AuctionViewRanking.builder()
			.rank(rank)
			.itemId(info.getItemId())
			.itemName(info.getItemName())
			.itemRarity(info.getItemRarity())
			.itemType(info.getItemType())
			.itemTypeDetail(info.getItemTypeDetail())
			.itemImage("https://img-api.neople.co.kr/df/items/" + info.getItemId())
			.build();
	}
}
