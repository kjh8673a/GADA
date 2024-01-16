package com.maple.mapleservice.service.character;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.maple.mapleservice.repository.character.CharacterExpHistoryRepository;

@SpringBootTest
public class CharacterExpHistoryIntegrationTest {
	@Autowired
	CharacterExpHistoryRepository characterExpHistoryRepository;

	@Test
	void 경험치_히스토리_ocid_조회_테스트() {
		List<String> ocids = characterExpHistoryRepository.findDistinctOcidInExpHistory();
		ocids.stream().forEach(System.out::println);
	}

}

