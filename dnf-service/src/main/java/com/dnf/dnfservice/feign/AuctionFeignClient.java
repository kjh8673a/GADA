package com.dnf.dnfservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dnf.dnfservice.config.FeignConfig;
import com.dnf.dnfservice.dto.feign.auction.AuctionSearchDto;

@FeignClient(name = "auction-api", url = "${feign.dnf.url}" + "/auction", configuration = FeignConfig.class)
public interface AuctionFeignClient {

	@GetMapping("")
	AuctionSearchDto searchAuctionItems(@RequestParam String itemName, @RequestParam Integer limit, @RequestParam String wordType);

}
