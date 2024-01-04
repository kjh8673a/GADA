package com.maple.mapleservice.config;

import com.maple.mapleservice.util.APIRequestInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignConfig {
    @Bean
    public APIRequestInterceptor feignInterceptor() {
        return new APIRequestInterceptor();
    }
}
