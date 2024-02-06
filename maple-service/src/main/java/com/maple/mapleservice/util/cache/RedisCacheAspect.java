package com.maple.mapleservice.util.cache;

import java.lang.reflect.Method;
import java.util.concurrent.TimeUnit;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.maple.mapleservice.util.CommonUtil;

import lombok.RequiredArgsConstructor;

@Aspect
@Component
@RequiredArgsConstructor
public class RedisCacheAspect {

	private final RedisTemplate redisTemplate;

	private CommonUtil commonUtil = new CommonUtil();

	@Around("@annotation(RedisCacheable)")
	public Object cacheableProcess(ProceedingJoinPoint joinPoint) throws Throwable {

		RedisCacheable redisCacheable = getCacheable(joinPoint);
		final String cacheKey = generateKey(redisCacheable.value(), joinPoint);

		// 같은 키로 캐시가 있으면 그 값 반환
		if (Boolean.TRUE.equals(redisTemplate.hasKey(cacheKey))) {
			return redisTemplate.opsForValue().get(cacheKey);
		}

		// 넣을 value 가져오기
		final Object methodReturnValue = joinPoint.proceed();
		
		// 만료시간 설정
		final long cacheTTL = commonUtil.setTtl();

		// value가 있을 때만 캐시에 저장한다
		if(methodReturnValue != null && String.valueOf(methodReturnValue).length() > 0) {
			if (cacheTTL < 0) {
				redisTemplate.opsForValue().set(cacheKey, methodReturnValue);
			} else {
				redisTemplate.opsForValue().set(cacheKey, methodReturnValue, cacheTTL, TimeUnit.SECONDS);
			}
		}

		return methodReturnValue;
	}

	private RedisCacheable getCacheable(ProceedingJoinPoint joinPoint) {
		final MethodSignature signature = (MethodSignature)joinPoint.getSignature();
		final Method method = signature.getMethod();

		return AnnotationUtils.getAnnotation(method, RedisCacheable.class);
	}

	private String generateKey(String cacheName, ProceedingJoinPoint joinPoint) {
		String generatedKey = StringUtils.arrayToDelimitedString(joinPoint.getArgs(), "_");

		return String.format("%s::%s", cacheName, generatedKey);
	}
}
