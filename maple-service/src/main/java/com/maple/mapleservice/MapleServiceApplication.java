package com.maple.mapleservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class MapleServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(MapleServiceApplication.class, args);
	}
}
