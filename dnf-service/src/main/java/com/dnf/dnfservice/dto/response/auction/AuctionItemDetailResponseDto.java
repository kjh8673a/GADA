package com.dnf.dnfservice.dto.response.auction;

import java.util.List;

import com.dnf.dnfservice.dto.model.auction.AuctionSearchItem;
import com.dnf.dnfservice.dto.model.auction.AuctionSoldInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuctionItemDetailResponseDto {
	String itemId;
	String itemName;
	String itemRarity;
	String itemType;
	String itemTypeDetail;
	String itemImage;

	Long upperPrice;
	Long lowerPrice;
	Long averagePrice;

	Integer registeredNumber;
	Long totalItemCount;

	List<AuctionSoldInfo> history;

	public static AuctionItemDetailResponseDto of(AuctionSearchItem item, Long upperPrice, Long lowerPrice,
		int registeredNumber, Long totalItemCount, List<AuctionSoldInfo> history) {
		return AuctionItemDetailResponseDto.builder()
			.itemId(item.getItemId())
			.itemName(item.getItemName())
			.itemRarity(item.getItemRarity())
			.itemType(item.getItemType())
			.itemTypeDetail(item.getItemTypeDetail())
			.itemImage("https://img-api.neople.co.kr/df/items/" + item.getItemId())
			.averagePrice(item.getAveragePrice())
			.upperPrice(upperPrice)
			.lowerPrice(lowerPrice)
			.registeredNumber(registeredNumber)
			.totalItemCount(totalItemCount)
			.history(history)
			.build();
	}
}
