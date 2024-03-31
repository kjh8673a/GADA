package com.dnf.dnfservice.dto.model.auction;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuctionSoldInfo {
	String soldDate;
	String count;
	String price;
	String unitPrice;

	public static AuctionSoldInfo of(AuctionSoldItem item) {
		return AuctionSoldInfo.builder()
			.soldDate(item.getSoldDate())
			.count(item.getCount())
			.price(item.getPrice())
			.unitPrice(item.getUnitPrice())
			.build();
	}
}
