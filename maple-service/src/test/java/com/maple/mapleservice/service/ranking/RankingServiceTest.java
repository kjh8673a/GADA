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
import com.maple.mapleservice.repository.ranking.RankingRepository;

@SpringBootTest
class RankingServiceTest {

	@Autowired
	RankingService rankingService;

	@Autowired
	RankingRepository rankingRepository;

	@Autowired
	RankingSchedule rankingSchedule;

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
	void 전투력_랭킹_서버에서_200명_불러오기_테스트() {
		List<String> ocids = rankingRepository.getTop200CombatPowerRankersByWorldName("스카니아");

		assertThat(ocids).hasSize(200);
	}

	// 랭킹 갱신 되는 것 확인하였음.
	// 굳이 빌드에서는 안해도 될듯하여 주석처리함.
	// @Test
	// void 전투력_랭킹_갱신_테스트() {
	// 	rankingSchedule.renewCombatPowerRanking();
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