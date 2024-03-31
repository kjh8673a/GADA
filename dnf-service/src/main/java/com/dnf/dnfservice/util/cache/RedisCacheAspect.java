package com.dnf.dnfservice.util.cache;

import java.lang.reflect.Method;
import java.util.concurrent.TimeUnit;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Aspect
@Component
@RequiredArgsConstructor
public class RedisCacheAspect {

	private final RedisTemplate redisTemplate;

	@Around("@annotation(RedisCacheable)")
	public Object cacheableProcess(ProceedingJoinPoint joinPoint) throws Throwable {
		MethodSignature signature = (MethodSignature) joinPoint.getSignature();
		Method method = signature.getMethod();
		RedisCacheable redisCacheable = method.getAnnotation(RedisCacheable.class);

		String key = "";
		if(!redisCacheable.key().isBlank() && redisCacheable.key() != null) {
			key = (String) customSpELParser(signature.getParameterNames(), joinPoint.getArgs(), redisCacheable.key());
		}

		final String cacheKey = generateKey(redisCacheable.value(), key);

		// 같은 키로 캐시가 있으면 그 값 반환
		if (Boolean.TRUE.equals(redisTemplate.hasKey(cacheKey))) {
			return redisTemplate.opsForValue().get(cacheKey);
		}

		// 넣을 value 가져오기
		final Object methodReturnValue = joinPoint.proceed();
		
		// 만료시간 설정(초단위)
		final long cacheTTL = redisCacheable.expire();

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

	@Around("@annotation(RedisCacheEvict)")
	public void cacheEvictProcess(ProceedingJoinPoint joinPoint) throws Throwable {
		MethodSignature signature = (MethodSignature) joinPoint.getSignature();
		Method method = signature.getMethod();
		RedisCacheEvict redisCacheEvict = method.getAnnotation(RedisCacheEvict.class);

		String key = "";
		if(!redisCacheEvict.key().isBlank() && redisCacheEvict.key() != null) {
			key = (String) customSpELParser(signature.getParameterNames(), joinPoint.getArgs(), redisCacheEvict.key());
		}

		final String cacheKey = generateKey(redisCacheEvict.value(), key);

		redisTemplate.delete(cacheKey);
	}

	private Object customSpELParser(String[] parameterNames, Object[] args, String name) {
		ExpressionParser parser = new SpelExpressionParser();
		EvaluationContext context = new StandardEvaluationContext();

		for (int i = 0; i < parameterNames.length; i++) {
			context.setVariable(parameterNames[i], args[i]);
		}

		return parser.parseExpression(name).getValue(context);
	}

	private String generateKey(String cacheName, String key) {
		if(key.isBlank() || key == null) {
			return cacheName;
		}
		return String.format("%s::%s", cacheName, key);
	}
}
