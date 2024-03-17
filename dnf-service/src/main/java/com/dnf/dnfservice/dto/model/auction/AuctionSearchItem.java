package com.dnf.dnfservice.dto.model.auction;

import lombok.Getter;

@Getter
public class AuctionSearchItem {
	Long auctionNo;
	String regDate;
	String expireDate;
	String itemId;
	String itemName;
	String itemTypeDetail;
	Long count;
	Long price;
	Long currentPrice;
	Long unitPrice;
	Long averagePrice;
}
