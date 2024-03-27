package com.dnf.dnfservice.util;

import org.springframework.beans.factory.annotation.Value;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ApiRequestInterceptor implements RequestInterceptor {
	@Value("${feign.dnf.api-key}")
	private String apiKey;

	@Override
	public void apply(RequestTemplate template) {
		template.header("apikey", apiKey);
	}
}
