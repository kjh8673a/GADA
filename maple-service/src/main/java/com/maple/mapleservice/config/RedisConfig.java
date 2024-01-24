package com.maple.mapleservice.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.data.redis.RedisProperties;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cglib.core.Local;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisPassword;
import org.springframework.data.redis.connection.RedisSentinelConfiguration;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Configuration
@EnableCaching
public class RedisConfig {
	@Value("${spring.data.redis.host}")
	private String host;

	@Value("${spring.data.redis.port}")
	private int port;

	@Value("${spring.data.redis.password}")
	private String password;

	private final ZoneId zoneId = ZoneId.of("Asia/Seoul");

	@Bean
	public RedisConnectionFactory redisConnectionFactory() {
		RedisStandaloneConfiguration standaloneConfig = new RedisStandaloneConfiguration();
		standaloneConfig.setHostName(host);
		standaloneConfig.setPort(port);
		standaloneConfig.setPassword(password);

		// RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration()
		//     .master("mymaster")
		//     .sentinel(host, 26379)
		//     .sentinel(host, 26380)
		//     .sentinel(host, 26381);
		//
		// sentinelConfig.setPassword(password);

		return new LettuceConnectionFactory(standaloneConfig);
	}

	@Bean
	public CacheManager cacheManager() {
		RedisCacheManager.RedisCacheManagerBuilder builder =
			RedisCacheManager.RedisCacheManagerBuilder.fromConnectionFactory(redisConnectionFactory());

		RedisCacheConfiguration configuration = RedisCacheConfiguration.defaultCacheConfig()
			.serializeValuesWith(
				RedisSerializationContext
					.SerializationPair
					.fromSerializer(new GenericJackson2JsonRedisSerializer())
			) // JSON 형태로 직렬화 적용
			.disableCachingNullValues() //데이터가 null일경우 캐싱하지 않음
			.entryTtl(
				Duration.between(
					LocalDateTime.now(zoneId),
					LocalDateTime.of(getNextDate(), ZonedDateTime.of(getNextDate(), LocalTime.of(1, 0, 0), zoneId).toLocalTime()))
			) //유효기간 설정
			.disableCachingNullValues();

		builder.cacheDefaults(configuration);

		return builder.build();
	}

	private static LocalDate getNextDate() {
		if(LocalDateTime.now(ZoneId.of("Asia/Seoul")).toLocalTime().isBefore(LocalTime.of(1, 0, 0))) {
			return LocalDateTime.now().atZone(ZoneId.of("Asia/Seoul")).toLocalDate();
		}else {
			return LocalDateTime.now().atZone(ZoneId.of("Asia/Seoul")).plusDays(1).toLocalDate();
		}
	}

}
