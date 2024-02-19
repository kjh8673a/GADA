package com.maple.mapleservice.config;

import com.maple.mapleservice.util.ApiRequestInterceptor;
import feign.Logger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class FeignConfig {
    @Bean
    public ApiRequestInterceptor feignInterceptor() {
        return new ApiRequestInterceptor();
    }
    @Bean
    Logger.Level feighnLoggerLevel(){
        return Logger.Level.BASIC;
    }
}
