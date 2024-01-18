package com.maple.mapleservice.service.character;

import java.util.ArrayList;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.repository.character.CharacterExpHistoryRepository;
import com.maple.mapleservice.util.CommonUtil;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class CharacterSchedule {
	private final CharacterExpHistoryRepository characterExpHistoryRepository;

	private CommonUtil commonUtil = new CommonUtil();

	// 매일 01:00마다 실행
	@Scheduled(cron = "0 0 1 * * ?")
	public void deleteExpHistory() {
		log.info("경험치 히스토리 테이블에서 필요없는 데이터 삭제");

		List<String> distinctOcidInExpHistory = characterExpHistoryRepository.findDistinctOcidInExpHistory();
		List<Long> numbersToBeDeletedList = new ArrayList<>();
		for(String ocid : distinctOcidInExpHistory) {
			List<Long> numbersToBeRemained = characterExpHistoryRepository.findNumbersToBeRemained(ocid);
			List<Long> numbersToBeDeleted = characterExpHistoryRepository.findNumbersToBeDeleted(ocid, numbersToBeRemained);
			numbersToBeDeletedList.addAll(numbersToBeDeleted);
		}

		characterExpHistoryRepository.expHistoryBatchDelete(numbersToBeDeletedList);

		log.info(numbersToBeDeletedList.size() + "개 데이터 삭제 완료");
	}
}
