package com.dnf.dnfservice.service.auction;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
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

import com.dnf.dnfservice.dto.response.auction.AuctionItemDetailResponseDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuctionSchedule {
	private final RedisTemplate redisTemplate;
	private final JdbcTemplate jdbcTemplate;
	private final AuctionService auctionService;

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
			"INSERT INTO auction_item_history (datetime, item_id, average_price, registered_number, total_item_count)"
				+ "VALUES (?, ?, ?, ?, ?)";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				AuctionItemDetailResponseDto item = list.get(i);

				ps.setString(1, now);
				ps.setString(2, item.getItemId());
				ps.setLong(3, Long.valueOf(Optional.ofNullable(item.getAveragePrice()).orElseGet(() -> 0L)));
				ps.setLong(4, Long.valueOf(Optional.ofNullable(item.getRegisteredNumber()).orElseGet(() -> 0L)));
				ps.setLong(5, Long.valueOf(Optional.ofNullable(item.getTotalItemCount()).orElseGet(() -> 0L)));
			}

			@Override
			public int getBatchSize() {
				return list.size();
			}
		});

	}

}
