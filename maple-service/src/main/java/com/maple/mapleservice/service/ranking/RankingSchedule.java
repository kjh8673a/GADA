package com.maple.mapleservice.service.ranking;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.dto.model.ranking.Overall;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.entity.Guild;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.repository.guild.GuildRepository;
import com.maple.mapleservice.service.character.CharacterService;
import com.maple.mapleservice.service.guild.GuildApiService;
import com.maple.mapleservice.util.CommonUtil;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.repository.ranking.RankingRepository;
import com.maple.mapleservice.util.WorldName;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class RankingSchedule {
	private final RankingRepository rankingRepository;
	private final CharacterRepository characterRepository;
	private final GuildRepository guildRepository;
	private final GuildApiService guildApiService;
	private final RankingApiService rankingApiService;
	private final CharacterService characterService;

	private final CommonUtil commonUtil = new CommonUtil();

	// 매일 01:00마다 실행
	@Scheduled(cron = "0 0 1 * * ?", zone = "Asia/Seoul")
	public void renewCombatPowerRanking() {
		log.info("개인 전투력 랭킹 갱신");

		List<String> ocidsToBeUpdated = new ArrayList<>();
		for (WorldName worldName : WorldName.values()) {
			List<String> ocidList = rankingRepository.getTop200CombatPowerRankersByWorldName(worldName.name());
			ocidsToBeUpdated.addAll(ocidList);

			log.info(worldName.name() + " : " + ocidList.size());
		}

		rankingRepository.combatPowerBatchUpdate(ocidsToBeUpdated);

		log.info(ocidsToBeUpdated.size() + "개 데이터 갱신 완료");
	}

	@Transactional
	@Scheduled(cron = "0 0 2 * * ?", zone = "Asia/Seoul")
	public void updateGuildCombatPower() {
		log.info("길드 전투력 갱신 시작");

		List<Guild> findGuilds = guildRepository.findAll();
		List<Guild> updateGuilds = new ArrayList<>();

		for (Guild g : findGuilds) {
			GuildBasicDto guildBasicDto = guildApiService.getGuildBasic(g.getOguildId());
			if (guildBasicDto == null) {
				continue;
			}

			List<Character> characters = characterRepository.getGuildMembersInfo(guildBasicDto.getGuild_member());
			Long sumCombatPower = 0L;

			for (Character c : characters) {
				sumCombatPower += c.getCombat_power();
			}

			Guild guild = Guild.builder()
				.id(g.getId())
				.oguildId(g.getOguildId())
				.date(commonUtil.date)
				.name(guildBasicDto.getGuild_name())
				.worldName(guildBasicDto.getWorld_name())
				.masterName(guildBasicDto.getGuild_master_name())
				.combatPower(sumCombatPower)
				.level(guildBasicDto.getGuild_level().longValue())
				.build();

			updateGuilds.add(guild);
		}

		guildRepository.batchGuildUpdate(updateGuilds);

		log.info(updateGuilds.size() + "개의 길드 전투력 갱신 완료");
	}

	// 매시 30분마다 랭킹에서 랜덤 한페이지(200개 캐릭터) db에 넣기
	@Transactional
	@Scheduled(cron = "0 30 * * * ?")
	public void characterRankingRandomInsert() {
		int page = (int)(Math.random() * 100000) + 1;
		log.info("종합 랭킹 캐릭터 db에 추가 : page : " + page);

		List<Overall> overallList = rankingApiService.getRankingOverall(page);
		List<String> characterNames = overallList.stream().map(Overall::getCharacter_name).collect(Collectors.toList());
		characterService.addCharacterInformationToDB(characterNames);
	}

}
