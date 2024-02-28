package com.dnf.dnfservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.dnf.dnfservice.util.ApiRequestInterceptor;

import feign.Logger;

@Configuration
public class FeignConfig {
	@Bean
	public ApiRequestInterceptor feignInterceptor() {
		return new ApiRequestInterceptor();
	}

	@Bean
	Logger.Level feighnLoggerLevel() {
		return Logger.Level.BASIC;
	}
}
