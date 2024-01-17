package com.maple.mapleservice.service.union;

import com.maple.mapleservice.dto.feign.union.UnionDto;
import com.maple.mapleservice.dto.feign.union.UnionRaiderDto;

public interface UnionApiService {
	UnionDto getUnionDto(String ocid);
	UnionRaiderDto getUnionRaiderDto(String ocid);
}
