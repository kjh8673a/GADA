package com.dnf.dnfservice.dto.model.auction;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuctionItemInfo {
	String regDate;
	String expireDate;
	Long count;
	Long currentPrice;
	Long unitPrice;

	public static AuctionItemInfo of(AuctionSearchItem item) {
		return AuctionItemInfo.builder()
			.regDate(item.getRegDate())
			.expireDate(item.getExpireDate())
			.count(item.getCount())
			.currentPrice(item.getCurrentPrice())
			.unitPrice(item.getUnitPrice())
			.build();
	}
}
