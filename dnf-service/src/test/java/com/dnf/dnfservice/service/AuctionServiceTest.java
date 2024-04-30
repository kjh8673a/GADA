package com.dnf.dnfservice.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.model.auction.AuctionViewRanking;
import com.dnf.dnfservice.service.auction.AuctionSchedule;
import com.dnf.dnfservice.service.auction.AuctionService;

@SpringBootTest
public class AuctionServiceTest {
	@Autowired
	AuctionService auctionService;

	@Autowired
	AuctionSchedule auctionSchedule;

	@Autowired
	RedisTemplate redisTemplate;

	@Test
	void 경매장_검색() {
		auctionService.searchAuctionItems("카인의 빛나는")
			.getItems()
			.stream()
			.forEach(data -> System.out.println(
				data.getItemType() + " " + data.getItemTypeDetail() + " " + data.getItemName() + " "
					+ data.isInAuction()));
	}

	@Test
	void zset출력() {
		Set<String> ranking = redisTemplate.opsForZSet()
			.reverseRange("auctionItemViewRank", 0, -1);

		ranking.stream().forEach(System.out::println);

		System.out.println(LocalDateTime.now().toString().substring(0, 14) + "00");
	}

	@Test
	void 스케쥴_테스트() {
		auctionSchedule.addToDBAuctionItem();
	}

}
