package com.maple.mapleservice.service.ranking;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.maple.mapleservice.dto.model.ranking.Union;

@SpringBootTest
class RankingApiServiceTest {

	@Autowired
	RankingApiService rankingApiService;

	@Test
	void 유니온_랭킹_조회_테스트() {
		List<Union> unionList = rankingApiService.getRankingUnion("45a15799827229de6694e3086160d615efe8d04e6d233bd35cf2fabdeb93fb0d", "루나");

		assertThat(unionList.size()).isEqualTo(1);
	}
}