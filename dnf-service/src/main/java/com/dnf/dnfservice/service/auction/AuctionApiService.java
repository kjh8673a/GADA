package com.dnf.dnfservice.service.auction;

import com.dnf.dnfservice.dto.feign.auction.AuctionSearchDto;

public interface AuctionApiService {
	AuctionSearchDto searchAuctionItems(String itemName);
}
