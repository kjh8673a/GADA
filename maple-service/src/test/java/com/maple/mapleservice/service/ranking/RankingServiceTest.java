package com.maple.mapleservice.service.ranking;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

@SpringBootTest
class RankingServiceTest {

	@Autowired
	RankingService rankingService;

	// @Test
	// void 종합_랭킹_조회해서_DB저장() {
	// 	// 0: ~10
	// 	// 1 : ~7
	// 	rankingService.addCharacterInformationFromRankingToDB(1, 8);
	// }
	//
	// @Test
	// void 캐릭터_이미지_없는_것_찾아서_넣기() {
	// 	rankingService.addCharacterImageFromDB();
	// }

	@Test
	void 페이징_테스트() {
		PageRequest pageable = PageRequest.of(1, 20);

		rankingService.getCombatPowerRanking("크로아", "듀얼블레이더", pageable);
	}

}