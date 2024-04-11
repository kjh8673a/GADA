package com.maple.mapleservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.maple.mapleservice.config.FeignConfig;
import com.maple.mapleservice.dto.feign.union.UnionArtifactDto;
import com.maple.mapleservice.dto.feign.union.UnionDto;
import com.maple.mapleservice.dto.feign.union.UnionRaiderDto;

@FeignClient(name = "union-api", url = "${feign.maple.url}" + "/user", configuration = FeignConfig.class)
public interface UnionFeignClient {

	// 유니온 정보 조회
	@GetMapping("/union")
	UnionDto getUnionDto(@RequestParam String ocid);

	// 유니온 공격대 정보 조회
	@GetMapping("/union-raider")
	UnionRaiderDto getUnionRaiderDto(@RequestParam String ocid);

	// 유니온 공격대 정보 조회
	@GetMapping("/union-artifact")
	UnionArtifactDto getUnionArtifactDto(@RequestParam String ocid);
}
