package com.maple.mapleservice.service.ranking;

import static org.assertj.core.api.Assertions.*;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.dto.response.Ranking.GuildCombatPowerRankingResponseDto;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.entity.Guild;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.repository.guild.GuildRepository;
import com.maple.mapleservice.service.guild.GuildApiService;
import com.maple.mapleservice.util.CommonUtil;
import com.maple.mapleservice.util.WorldName;
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

	@Autowired
	GuildRepository guildRepository;
	@Autowired
	GuildApiService guildApiService;
	@Autowired
	CharacterRepository characterRepository;
	CommonUtil commonUtil = new CommonUtil();
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

		List<CharacterCombatPowerRankingResponseDto> list = rankingService.getCombatPowerRanking(null, null, pageable, pageable.getPageNumber());

		assertThat(list.size()).isEqualTo(20);
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

// 	@Test
// 	void 길드_수로랭킹_페이징_조회_테스트(){
// 		List<Guild> guildList = rankingService.getGuildWaterwayRanking(null, 10);
//
// 		assertThat(guildList).hasSize(20);
//
// //		for(Guild g : guildList){
// //			System.out.println(g.toString());
// //		}
// 	}

	@Test
	void 길드전투력_랭킹_페이징_통합_테스트() {
		PageRequest pageable = PageRequest.of(0, 20);

		Page<GuildCombatPowerRankingResponseDto> list = rankingService.getGuildCombatPowerRanking(null, pageable);

		assertThat(list.getContent()).hasSize(20);

	}

//	@Test
//	public void 길드전투력_갱신_시간테스트(){
////		log.info("길드 전투력 갱신 시작");
//		Instant start = Instant.now();
//		List<com.maple.mapleservice.entity.Guild> findGuilds = guildRepository.findAll();
//		List<com.maple.mapleservice.entity.Guild> updateGuilds = new ArrayList<>();
//
//		for(com.maple.mapleservice.entity.Guild g : findGuilds){
//			GuildBasicDto guildBasicDto = guildApiService.getGuildBasic(g.getOguildId());
//			if(guildBasicDto == null){
//				continue;
//			}
//
//			List<Character> characters = characterRepository.getGuildMembersInfo(guildBasicDto.getGuild_member());
//			Long sumCombatPower = 0L;
//
//			for(Character c : characters){
//				sumCombatPower += c.getCombat_power();
//			}
//
//			com.maple.mapleservice.entity.Guild guild = Guild.builder()
//					.id(g.getId())
//					.oguildId(g.getOguildId())
//					.date(commonUtil.date)
//					.name(guildBasicDto.getGuild_name())
//					.worldName(guildBasicDto.getWorld_name())
//					.masterName(guildBasicDto.getGuild_master_name())
//					.combatPower(sumCombatPower)
//					.level(guildBasicDto.getGuild_level().longValue())
//					.build();
//
//			updateGuilds.add(guild);
//		}
//
//		guildRepository.batchGuildUpdate(updateGuilds);
//
////		log.info(updateGuilds.size() + "개의 길드 전투력 갱신 완료");
//		Instant end = Instant.now();
//
//		Duration duration = Duration.between(start, end);
//		double seconds = duration.toMillis() / 1000.0;
//		System.out.printf("실행 시간: %.2f초", seconds);
//		System.out.println(updateGuilds.size() + "개의 갱신 완료");
//	}

}