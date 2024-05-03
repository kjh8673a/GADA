package com.dnf.dnfservice.service.auction;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dnf.dnfservice.dto.feign.auction.AuctionSearchDto;
import com.dnf.dnfservice.dto.feign.auction.AuctionSoldDto;
import com.dnf.dnfservice.dto.model.auction.AuctionSearchItem;
import com.dnf.dnfservice.dto.model.auction.AuctionSoldItem;
import com.dnf.dnfservice.dto.response.auction.AuctionItemDetailResponseDto;
import com.dnf.dnfservice.exception.CustomException;
import com.dnf.dnfservice.exception.ErrorCode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuctionSchedule {
	private final RedisTemplate redisTemplate;
	private final JdbcTemplate jdbcTemplate;
	private final AuctionService auctionService;
	private final AuctionApiService auctionApiService;

	@Transactional
	@Scheduled(cron = "0 0/10 * * * ?")
	public void addToZSetAuctionItemViewCount() {
		log.info("경매장 검색기록 zset에 삽입 / 기간 만료된 기록 삭제");

		Set<String> redisKeys = redisTemplate.keys("auctionItemViewCount*");
		Objects.requireNonNull(redisKeys).forEach(data -> {
			String itemId = data.split("::")[1];
			Set<String> redisExpireTime = redisTemplate.opsForSet().members(data);
			redisExpireTime.stream().forEach(expire -> {
				if (LocalDateTime.parse(expire).isBefore(LocalDateTime.now(ZoneId.of("Asia/Seoul")))) {
					redisTemplate.opsForSet().remove(data, expire);
				}
			});
			Long size = redisTemplate.opsForSet().size(data);
			redisTemplate.opsForZSet().add("auctionItemViewRank", itemId, size);
		});
	}

	@Transactional
	@Scheduled(cron = "0 0 * * * ?")
	public void addToDBAuctionItem() {
		log.info("경매장 아이템 정보 한시간마다 db에 삽입");

		String now = LocalDateTime.now(ZoneId.of("Asia/Seoul")).toString().substring(0, 14) + "00";

		Set<String> ranking = redisTemplate.opsForZSet().reverseRange("auctionItemViewRank", 0, -1);

		List<AuctionItemDetailResponseDto> list = ranking.stream()
			.map(data -> {
				AuctionItemDetailResponseDto tmp = null;
				try {
					tmp = auctionService.getAuctionItemInformation(data);
				}catch (Exception e) {
					log.info(e.getMessage());
				}
				return tmp;
			})
			.filter(data -> data != null)
			.toList();

		String sql =
			"INSERT INTO auction_item_history (datetime, item_id, average_price, registered_number, total_item_count, lower_price, upper_price, sold_lower_price, sold_upper_price, sold_count)"
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				AuctionItemDetailResponseDto item = list.get(i);

				AuctionSearchDto searchDto = auctionApiService.searchByItemId(item.getItemId());

				Long lowerPrice = 0L;
				Long upperPrice = 0L;

				if (searchDto.getRows().size() != 0) {
					AuctionSearchItem minPriceItem = searchDto.getRows()
						.stream()
						.min(Comparator.comparing(AuctionSearchItem::getUnitPrice))
						.orElseThrow(NoSuchElementException::new);

					AuctionSearchItem maxPriceItem = searchDto.getRows()
						.stream()
						.max(Comparator.comparing(AuctionSearchItem::getUnitPrice))
						.orElseThrow(NoSuchElementException::new);

					lowerPrice = Long.valueOf(Optional.ofNullable(minPriceItem.getUnitPrice()).orElseGet(() -> 0L));
					upperPrice = Long.valueOf(Optional.ofNullable(maxPriceItem.getUnitPrice()).orElseGet(() -> 0L));
				}

				AuctionSoldDto dto = auctionApiService.getSoldMaxHistory(item.getItemId());

				String searchDateTime = LocalDateTime.now().minusHours(1).format(
					DateTimeFormatter.ofPattern("yyyy-MM-dd HH:")
				);
				List<AuctionSoldItem> oneHourList = dto.getRows()
					.stream()
					.filter(t -> t.getSoldDate().startsWith(searchDateTime))
					.collect(Collectors.toList());

				Long soldLowerPrice = 0L;
				Long soldUpperPrice = 0L;
				Long soldCount = 0L;

				if(oneHourList.size() > 0) {
					AuctionSoldItem min = oneHourList.stream()
						.min(Comparator.comparing(AuctionSoldItem::getUnitPrice))
						.orElseThrow(NoSuchElementException::new);

					AuctionSoldItem max = oneHourList.stream()
						.max(Comparator.comparing(AuctionSoldItem::getUnitPrice))
						.orElseThrow(NoSuchElementException::new);

					soldLowerPrice = Long.valueOf(Optional.ofNullable(min.getUnitPrice()).orElseGet(() -> String.valueOf(0)));
					soldUpperPrice = Long.valueOf(Optional.ofNullable(max.getUnitPrice()).orElseGet(() -> String.valueOf(0)));

					soldCount = oneHourList.stream().mapToLong(t -> Long.parseLong(t.getCount())).sum();
				}

				ps.setString(1, now);
				ps.setString(2, item.getItemId());
				ps.setLong(3, Long.valueOf(Optional.ofNullable(item.getAveragePrice()).orElseGet(() -> 0L)));
				ps.setLong(4, Long.valueOf(Optional.ofNullable(item.getRegisteredNumber()).orElseGet(() -> 0L)));
				ps.setLong(5, Long.valueOf(Optional.ofNullable(item.getTotalItemCount()).orElseGet(() -> 0L)));
				ps.setLong(6, lowerPrice);
				ps.setLong(7, upperPrice);
				ps.setLong(8, soldLowerPrice);
				ps.setLong(9, soldUpperPrice);
				ps.setLong(10, soldCount);
			}

			@Override
			public int getBatchSize() {
				return list.size();
			}
		});

	}

}
