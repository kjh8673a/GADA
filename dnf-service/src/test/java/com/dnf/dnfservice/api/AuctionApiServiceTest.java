package com.dnf.dnfservice.api;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dnf.dnfservice.dto.feign.auction.AuctionSearchDto;
import com.dnf.dnfservice.service.auction.AuctionApiService;

@SpringBootTest
class AuctionApiServiceTest {
	@Autowired
	AuctionApiService auctionApiService;

	@Test
	void 경매장_아이템_검색() {
		AuctionSearchDto auctionSearchDto = auctionApiService.searchAuctionItems("무색", "front");
		// auctionSearchDto.getRows().stream().forEach(data -> System.out.println(data.getItemId() + " : " + data.getItemName()));

		auctionSearchDto.getRows().stream()
			.filter(distinctByKey(data -> data.getItemId()))
			.collect(Collectors.toList())
			.forEach(data -> System.out.println(data.getItemName()));
	}

	private static <T> Predicate<T> distinctByKey(Function<? super T, Object> keyExtractor) {
		Map<Object, Boolean> map = new HashMap<>();
		return t -> map.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
	}
}