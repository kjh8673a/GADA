package com.dnf.dnfservice.service.auction;

import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.auction.AuctionSearchDto;
import com.dnf.dnfservice.feign.AuctionFeignClient;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuctionApiServiceImpl implements AuctionApiService {
	private final AuctionFeignClient auctionFeignClient;

	@Override
	public AuctionSearchDto searchAuctionItems(String itemName) {
		return auctionFeignClient.searchAuctionItems(itemName, 400, "front");
	}
}
