package com.dnf.dnfservice.service.auction;

import com.dnf.dnfservice.dto.response.auction.AuctionItemDetailResponseDto;
import com.dnf.dnfservice.dto.response.auction.AuctionSearchResponseDto;

public interface AuctionService {
	AuctionSearchResponseDto searchAuctionItems(String itemName);

	AuctionItemDetailResponseDto getAuctionItemInformation(String itemId);
}
