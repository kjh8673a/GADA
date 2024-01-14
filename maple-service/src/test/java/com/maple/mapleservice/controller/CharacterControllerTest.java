package com.maple.mapleservice.controller;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.maple.mapleservice.dto.response.SuccessResponse;

@SpringBootTest
class CharacterControllerTest {

	@Autowired
	CharacterController characterController;

	@Test
	void 본캐_찾기_통합_테스트() {
		String characterName = "아델";
		ResponseEntity<SuccessResponse> response = characterController.findMyCharacter(characterName);
		// assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
	}

	@Test
	void 경험치_히스토리_통합_테스트() {
		String characterName = "도적";
		ResponseEntity<SuccessResponse> response = characterController.getExpHistory(characterName);
	}

}