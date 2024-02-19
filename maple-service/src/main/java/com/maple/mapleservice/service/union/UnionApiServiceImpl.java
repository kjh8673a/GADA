package com.maple.mapleservice.service.union;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.union.UnionArtifactDto;
import com.maple.mapleservice.dto.feign.union.UnionDto;
import com.maple.mapleservice.dto.feign.union.UnionRaiderDto;
import com.maple.mapleservice.feign.UnionFeignClient;
import com.maple.mapleservice.util.CommonUtil;
import com.maple.mapleservice.util.cache.RedisCacheable;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UnionApiServiceImpl implements UnionApiService {
	private final UnionFeignClient unionFeignClient;

	private CommonUtil commonUtil = new CommonUtil();

	@Override
	@RedisCacheable(value = "union-api-union", key="#ocid")
	public UnionDto getUnionDto(String ocid) {
		return unionFeignClient.getUnionDto(ocid, commonUtil.date);
	}

	@Override
	@RedisCacheable(value = "union-api-union-raidar", key="#ocid")
	public UnionRaiderDto getUnionRaiderDto(String ocid) {
		return unionFeignClient.getUnionRaiderDto(ocid, commonUtil.date);
	}

	@Override
	@RedisCacheable(value = "union-api-union-artifact", key="#ocid")
	public UnionArtifactDto getUnionArtifactDto(String ocid) {
		return unionFeignClient.getUnionArtifactDto(ocid, commonUtil.date);
	}
}
