package com.maple.mapleservice.service.union;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.maple.mapleservice.dto.feign.union.UnionArtifactDto;
import com.maple.mapleservice.dto.feign.union.UnionDto;
import com.maple.mapleservice.dto.feign.union.UnionRaiderDto;
import com.maple.mapleservice.dto.response.union.UnionInfoResponseDto;

@SpringBootTest
public class UnionApiServiceIntegrationTest {
	@Autowired
	UnionApiService unionApiService;

	@Autowired
	UnionService unionService;

	private String ocid = "e0a4f439e53c369866b55297d2f5f4eb";

	@Test
	void 유니온_공격대_정보_조회_테스트() {
		UnionRaiderDto unionRaiderDto = unionApiService.getUnionRaiderDto(ocid);

		assertThat(unionRaiderDto.getUnion_block().get(0).getBlock_control_point().getX()).isNotNull();
	}

	@Test
	void 유니온_정보_조회_테스트() {
		UnionDto unionDto = unionApiService.getUnionDto(ocid);

		assertThat(unionDto.getUnion_level()).isNotNull();
	}

	@Test
	void 유니온_정보_조회_통합_테스트() {
		UnionInfoResponseDto unionInfoResponseDto = unionService.getUnionInfoResponseDto("아델");
	}

	@Test
	void 유니온_아티팩트_조회_테스트() {
		UnionArtifactDto unionArtifactDto = unionApiService.getUnionArtifactDto(ocid);
	}
}
