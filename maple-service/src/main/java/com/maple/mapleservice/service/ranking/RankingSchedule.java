package com.maple.mapleservice.service.ranking;


import java.util.ArrayList;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.repository.ranking.RankingCustomRepository;
import com.maple.mapleservice.repository.ranking.RankingRepository;
import com.maple.mapleservice.util.WorldName;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class RankingSchedule {
	private final RankingRepository rankingRepository;
	private final RankingCustomRepository rankingCustomRepository;
	
	// 매일 01:00마다 실행
	@Scheduled(cron = "0 0 1 * * ?")
	public void renewCombatPowerRanking() {
		log.info("개인 전투력 랭킹 갱신");

		List<String> ocidsToBeUpdated = new ArrayList<>();
		for(WorldName worldName : WorldName.values()){
			List<String> ocidList = rankingRepository.getTop200CombatPowerRankersByWorldName(worldName.name());
			ocidsToBeUpdated.addAll(ocidList);

			log.info(worldName.name() + " : " + ocidList.size());
		}

		rankingCustomRepository.combatPowerBatchUpdate(ocidsToBeUpdated);

		log.info(ocidsToBeUpdated.size() + "개 데이터 갱신 완료");
	}
}
