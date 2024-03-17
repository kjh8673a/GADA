package com.dnf.dnfservice.service.auction;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.auction.AuctionSearchDto;
import com.dnf.dnfservice.dto.model.auction.AuctionSearchItemInfo;
import com.dnf.dnfservice.dto.response.auction.AuctionSearchResponseDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuctionServiceImpl implements AuctionService {
	private final AuctionApiService auctionApiService;

	@Override
	public AuctionSearchResponseDto searchAuctionItems(String itemName) {
		AuctionSearchDto searchDto = auctionApiService.searchAuctionItems(itemName);

		List<AuctionSearchItemInfo> list = searchDto.getRows().stream()
			.filter(distinctByKey(data -> data.getItemId()))
			.map(data -> AuctionSearchItemInfo.of(data))
			.collect(Collectors.toList());

		return AuctionSearchResponseDto.of(list);
	}

	private static <T> Predicate<T> distinctByKey(Function<? super T, Object> keyExtractor) {
		Map<Object, Boolean> map = new HashMap<>();
		return t -> map.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
	}
}
