package com.maple.mapleservice.service.ranking;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.dto.model.ranking.Guild;
import com.maple.mapleservice.repository.guild.GuildRepository;
import com.maple.mapleservice.service.character.CharacterApiServiceImpl;
import com.maple.mapleservice.service.guild.GuildApiService;
import com.maple.mapleservice.util.CommonUtil;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.maple.mapleservice.dto.model.ranking.Union;


@SpringBootTest
class RankingApiServiceTest {

	@Autowired
	RankingApiService rankingApiService;
	@Autowired
	GuildApiService guildApiService;

	@Autowired
	CharacterApiServiceImpl characterApiService;

	@Autowired
	GuildRepository guildRepository;

	CommonUtil commonUtil = new CommonUtil();

	@Test
	void 유니온_랭킹_조회_테스트() {
		List<Union> unionList = rankingApiService.getRankingUnion("45a15799827229de6694e3086160d615efe8d04e6d233bd35cf2fabdeb93fb0d", "루나");

		// assertThat(unionList.size()).isEqualTo(1);
	}

	// @Test
	// void 종합_랭킹_조회_테스트() {
	// 	List<Overall> overallList = rankingApiService.getRankingOverall(0, 8);
	// 	System.out.println(overallList.get(0).getCharacter_name());
	//
	// 	assertThat(overallList.size()).isEqualTo(200);
	// }

	@Test
	void 길드_랭킹_조회_테스트(){

		List<Guild> guildList = rankingApiService.getRankingGuild(null, 2, 1);

	}

}