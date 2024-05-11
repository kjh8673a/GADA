package com.dnf.dnfservice.dto.model.auction;

import com.dnf.dnfservice.entity.AuctionItemHistory;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuctionGraphInfo {
	String datetime;
	Long averagePrice;
	Long registeredNumber;
	Long totalItemCount;
	Long lowerPrice;
	Long upperPrice;
	Long soldLowerPrice;
	Long soldUpperPrice;
	Long soldCount;

	public static AuctionGraphInfo of(AuctionItemHistory item) {
		return AuctionGraphInfo.builder()
			.datetime(item.getDatetime())
			.averagePrice(item.getAveragePrice())
			.registeredNumber(item.getRegisteredNumber())
			.totalItemCount(item.getTotalItemCount())
			.lowerPrice(item.getLowerPrice() == -1 ? item.getAveragePrice() : item.getLowerPrice())
			.upperPrice(item.getUpperPrice() == -1 ? item.getAveragePrice() : item.getUpperPrice())
			.soldLowerPrice(item.getSoldLowerPrice())
			.soldUpperPrice(item.getSoldUpperPrice())
			.soldCount(item.getSoldCount())
			.build();
	}
}
