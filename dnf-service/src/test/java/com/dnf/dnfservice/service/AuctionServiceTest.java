package com.dnf.dnfservice.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;

import com.dnf.dnfservice.dto.feign.auction.AuctionSoldDto;
import com.dnf.dnfservice.dto.model.auction.AuctionSoldItem;
import com.dnf.dnfservice.service.auction.AuctionApiService;
import com.dnf.dnfservice.service.auction.AuctionSchedule;
import com.dnf.dnfservice.service.auction.AuctionService;

@SpringBootTest
public class AuctionServiceTest {
	@Autowired
	AuctionService auctionService;

	@Autowired
	AuctionApiService auctionApiService;

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

	@Test
	void 옥션_판매_기록() {
		// 무색 큐브 조각 785e56a0ed4e3efd573da1f56a45217d
		AuctionSoldDto dto = auctionApiService.getSoldMaxHistory("c610cc2c1d89936c24a258ac8fbc31d4");
		String searchDateTime = LocalDateTime.now().minusHours(1).format(
			DateTimeFormatter.ofPattern("yyyy-MM-dd HH:")
		);
		// dto.getRows().stream().forEach(data -> System.out.println(data.getSoldDate()));

		List<AuctionSoldItem> list = dto.getRows()
			.stream()
			.filter(item -> item.getSoldDate().startsWith(searchDateTime))
			.collect(
				Collectors.toList());

		Long soldLowerPrice = 0L;
		Long soldUpperPrice = 0L;
		Long soldCount = 0L;

		if(list.size() > 0) {
			// 최저가
			AuctionSoldItem min = list.stream()
				.min(Comparator.comparing(AuctionSoldItem::getUnitPrice))
				.orElseThrow(NoSuchElementException::new);

			// 최고가
			AuctionSoldItem max = list.stream()
				.max(Comparator.comparing(AuctionSoldItem::getUnitPrice))
				.orElseThrow(NoSuchElementException::new);

			soldLowerPrice = Long.valueOf(Optional.ofNullable(min.getUnitPrice()).orElseGet(() -> String.valueOf(0)));
			soldUpperPrice = Long.valueOf(Optional.ofNullable(max.getUnitPrice()).orElseGet(() -> String.valueOf(0)));

			// 판매수량
			soldCount = list.stream().mapToLong(item -> Long.parseLong(item.getCount())).sum();
		}

		System.out.println(soldLowerPrice + " " + soldUpperPrice + " " + soldCount);
	}

}
