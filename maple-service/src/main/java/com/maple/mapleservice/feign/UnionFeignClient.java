package com.maple.mapleservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.maple.mapleservice.config.FeignConfig;
import com.maple.mapleservice.dto.feign.union.UnionDto;
import com.maple.mapleservice.dto.feign.union.UnionRaiderDto;

@FeignClient(name = "union-api", url = "${feign.maple.url}" + "/user", configuration = FeignConfig.class)
public interface UnionFeignClient {

	// 유니온 정보 조회
	@GetMapping("/union")
	public UnionDto getUnionDto(@RequestParam String ocid, @RequestParam String date);

	// 유니온 공격대 정보 조회
	@GetMapping("/union-raider")
	public UnionRaiderDto getUnionRaiderDto(@RequestParam String ocid, @RequestParam String date);
}
