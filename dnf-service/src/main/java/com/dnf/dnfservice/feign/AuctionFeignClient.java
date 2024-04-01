package com.dnf.dnfservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dnf.dnfservice.config.FeignConfig;
import com.dnf.dnfservice.dto.feign.auction.AuctionSearchDto;
import com.dnf.dnfservice.dto.feign.auction.AuctionSoldDto;

@FeignClient(name = "auction-api", url = "${feign.dnf.url}", configuration = FeignConfig.class)
public interface AuctionFeignClient {

	@GetMapping("/auction")
	AuctionSearchDto searchAuctionItems(@RequestParam String itemName, @RequestParam Integer limit, @RequestParam String wordType);

	@GetMapping("/auction")
	AuctionSearchDto searchByItemId(@RequestParam String itemId, @RequestParam Integer limit, @RequestParam String sort);

	@GetMapping("/auction-sold")
	AuctionSoldDto getSoldHistory(@RequestParam String itemId, @RequestParam Integer limit);
}
