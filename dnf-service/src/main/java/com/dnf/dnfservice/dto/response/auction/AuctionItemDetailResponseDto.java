package com.dnf.dnfservice.dto.response.auction;

import java.util.List;

import com.dnf.dnfservice.dto.model.auction.AuctionGraphInfo;
import com.dnf.dnfservice.dto.model.auction.AuctionItemInfo;
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
	Long averagePrice;

	Long registeredNumber;
	Long totalItemCount;

	List<AuctionItemInfo> registeredList;

	List<AuctionSoldInfo> history;

	List<AuctionGraphInfo> graph;

	public static AuctionItemDetailResponseDto of(AuctionSearchItem item,
		int registeredNumber, Long totalItemCount, List<AuctionSoldInfo> history, List<AuctionGraphInfo> graph,
		List<AuctionItemInfo> registeredList) {
		return AuctionItemDetailResponseDto.builder()
			.itemId(item.getItemId())
			.itemName(item.getItemName())
			.itemRarity(item.getItemRarity())
			.itemType(item.getItemType())
			.itemTypeDetail(item.getItemTypeDetail())
			.itemImage("https://img-api.neople.co.kr/df/items/" + item.getItemId())
			.averagePrice(item.getAveragePrice())
			.registeredNumber(Long.valueOf(registeredNumber))
			.totalItemCount(totalItemCount)
			.history(history)
			.graph(graph)
			.registeredList(registeredList)
			.build();
	}
}
