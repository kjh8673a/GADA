package com.maple.mapleservice.service.ranking;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class RankingServiceTest {

	@Autowired
	RankingService rankingService;

	@Test
	void 종합_랭킹_조회해서_DB저장_테스트() {
		rankingService.addCharacterInformationFromRankingToDB(0, 8);
	}

}