package com.maple.mapleservice.util;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

@RequiredArgsConstructor
public class ApiRequestInterceptor implements RequestInterceptor {
    @Value("${feign.maple.api-key}")
    private String apiKey;

    @Override
    public void apply(RequestTemplate template) {
        template.header("x-nxopen-api-key",apiKey);
    }

}
