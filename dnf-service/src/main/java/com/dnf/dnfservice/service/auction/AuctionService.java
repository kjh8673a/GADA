package com.dnf.dnfservice.service.auction;

import com.dnf.dnfservice.dto.response.auction.AuctionItemDetailResponseDto;
import com.dnf.dnfservice.dto.response.auction.AuctionSearchResponseDto;
import com.dnf.dnfservice.dto.response.auction.AuctionViewRankingResponseDto;

public interface AuctionService {
	AuctionSearchResponseDto searchAuctionItems(String itemName);

	AuctionItemDetailResponseDto getAuctionItemInformation(String itemId);

	void addAuctionItemViewCount(String itemId);

	AuctionViewRankingResponseDto getPopularItems();
}
