package com.dnf.dnfservice.service.auction;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.auction.AuctionSearchDto;
import com.dnf.dnfservice.dto.feign.auction.AuctionSoldDto;
import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.feign.item.ItemSearchDto;
import com.dnf.dnfservice.dto.model.auction.AuctionSearchItem;
import com.dnf.dnfservice.dto.model.auction.AuctionSearchItemInfo;
import com.dnf.dnfservice.dto.model.auction.AuctionSoldInfo;
import com.dnf.dnfservice.dto.model.auction.AuctionViewRanking;
import com.dnf.dnfservice.dto.response.auction.AuctionItemDetailResponseDto;
import com.dnf.dnfservice.dto.response.auction.AuctionSearchResponseDto;
import com.dnf.dnfservice.dto.response.auction.AuctionViewRankingResponseDto;
import com.dnf.dnfservice.exception.CustomException;
import com.dnf.dnfservice.exception.ErrorCode;
import com.dnf.dnfservice.service.item.ItemApiService;
import com.dnf.dnfservice.util.cache.RedisCacheable;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuctionServiceImpl implements AuctionService {
	private final AuctionApiService auctionApiService;
	private final ItemApiService itemApiService;

	private final RedisTemplate redisTemplate;

	@Override
	public AuctionSearchResponseDto searchAuctionItems(String itemName) {
		AuctionSearchDto searchDto = auctionApiService.searchAuctionItems(itemName);
		List<String> inAuctionList = searchDto.getRows().stream()
			.filter(distinctByKey(data -> data.getItemId()))
			.map(data -> data.getItemId())
			.collect(Collectors.toList());

		ItemSearchDto itemSearchDto = itemApiService.searchItems(itemName);
		List<AuctionSearchItemInfo> list = itemSearchDto.getRows().stream()
			.map(data -> AuctionSearchItemInfo.of(data, inAuctionList.contains(data.getItemId())))
			.collect(Collectors.toList());

		return AuctionSearchResponseDto.of(list);
	}

	@Override
	public AuctionItemDetailResponseDto getAuctionItemInformation(String itemId) {
		AuctionSearchDto searchDto = auctionApiService.searchByItemId(itemId);

		if (searchDto.getRows().size() == 0) {
			throw new CustomException(ErrorCode.ITEM_NOT_FOUND);
		}

		AuctionSearchItem maxPriceItem = searchDto.getRows()
			.stream()
			.max(Comparator.comparing(AuctionSearchItem::getUnitPrice))
			.orElseThrow(NoSuchElementException::new);

		AuctionSearchItem minPriceItem = searchDto.getRows()
			.stream()
			.min(Comparator.comparing(AuctionSearchItem::getUnitPrice))
			.orElseThrow(NoSuchElementException::new);

		Long totalVolume = searchDto.getRows().stream().mapToLong(AuctionSearchItem::getCount).sum();

		AuctionSoldDto soldDto = auctionApiService.getSoldHistory(itemId);

		List<AuctionSoldInfo> list = soldDto.getRows()
			.stream()
			.map(data -> AuctionSoldInfo.of(data))
			.collect(Collectors.toList());

		return AuctionItemDetailResponseDto.of(searchDto.getRows().get(0), maxPriceItem.getUnitPrice(),
			minPriceItem.getUnitPrice(), searchDto.getRows().size(), totalVolume, list);
	}

	@Override
	public void addAuctionItemViewCount(String itemId) {
		SetOperations<String, String> setOperations = redisTemplate.opsForSet();
		String key = "auctionItemViewCount::" + itemId;
		setOperations.add(key, LocalDateTime.now(ZoneId.of("Asia/Seoul")).plusHours(3).toString());
	}

	@Override
	@RedisCacheable(value = "auction-view-ranking", expire = 600)
	public AuctionViewRankingResponseDto getPopularItems() {
		List<AuctionViewRanking> rankings = new ArrayList<>();
		Set<ZSetOperations.TypedTuple<String>> ranking = redisTemplate.opsForZSet()
			.reverseRangeWithScores("auctionItemViewRank", 0, 9);

		int rank = 1;
		for(ZSetOperations.TypedTuple<String> item : ranking) {
			String itemId = item.getValue();
			if(item.getScore() == 0) {
				break;
			}
			ItemDetailDto itemDetailDto = itemApiService.getItemDetail(itemId);

			AuctionViewRanking viewRanking = AuctionViewRanking.of(rank++, itemDetailDto);
			rankings.add(viewRanking);
		}

		return AuctionViewRankingResponseDto.builder().ranking(rankings).build();
	}

	private static <T> Predicate<T> distinctByKey(Function<? super T, Object> keyExtractor) {
		Map<Object, Boolean> map = new HashMap<>();
		return t -> map.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
	}
}
