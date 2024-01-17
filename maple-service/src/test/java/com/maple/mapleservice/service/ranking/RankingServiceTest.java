package com.maple.mapleservice.service.ranking;

import static org.assertj.core.api.Assertions.*;

import java.util.List;

import com.maple.mapleservice.dto.model.ranking.Guild;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import com.maple.mapleservice.dto.response.Ranking.CharacterCombatPowerRankingResponseDto;

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
	void 전투력_랭킹_페이징_통합_테스트() {
		PageRequest pageable = PageRequest.of(0, 20);

		Page<CharacterCombatPowerRankingResponseDto> list = rankingService.getCombatPowerRanking(null, null, pageable);

		assertThat(list.getContent().size()).isEqualTo(20);
	}

	// @Test
	// void 전투력_랭킹_페이징_직업X_테스트() {
	// 	PageRequest pageable = PageRequest.of(0, 20);
	//
	// 	Page<CharacterCombatPowerRankingResponseDto> list = rankingService.getCombatPowerRanking("스카니아", "", pageable);
	//
	// 	assertThat(list.getContent().size()).isEqualTo(20);
	// }
	//
	// @Test
	// void 전투력_랭킹_페이징_월드X_테스트() {
	// 	PageRequest pageable = PageRequest.of(0, 20);
	//
	// 	Page<CharacterCombatPowerRankingResponseDto> list = rankingService.getCombatPowerRanking("", "듀얼블레이더", pageable);
	//
	// 	assertThat(list.getContent().size()).isEqualTo(20);
	// }

	@Test
	void 길드_수로랭킹_페이징_조회_테스트(){
		List<Guild> guildList = rankingService.getGuildWaterwayRanking(null, 10);

		assertThat(guildList).hasSize(20);

//		for(Guild g : guildList){
//			System.out.println(g.toString());
//		}
	}
}