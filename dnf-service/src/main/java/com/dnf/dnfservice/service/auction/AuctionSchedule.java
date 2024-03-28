package com.dnf.dnfservice.service.auction;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Objects;
import java.util.Set;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuctionSchedule {
	private final RedisTemplate redisTemplate;

	@Transactional
	@Scheduled(cron = "0 0/10 * * * ?")
	public void addToZSetAuctionItemViewCount() {
		log.info("경매장 검색기록 zset에 삽입 / 기간 만료된 기록 삭제");

		Set<String> redisKeys = redisTemplate.keys("auctionItemViewCount*");
		Objects.requireNonNull(redisKeys).forEach(data -> {
			String itemId = data.split("::")[1];
			Set<String> redisExpireTime = redisTemplate.opsForSet().members(data);
			redisExpireTime.stream().forEach(expire -> {
				if(LocalDateTime.parse(expire).isBefore(LocalDateTime.now(ZoneId.of("Asia/Seoul")))) {
					redisTemplate.opsForSet().remove(data, expire);
				}
			});
			Long size = redisTemplate.opsForSet().size(data);
			redisTemplate.opsForZSet().add("auctionItemViewRank", itemId, size);
		});
	}
	
}
