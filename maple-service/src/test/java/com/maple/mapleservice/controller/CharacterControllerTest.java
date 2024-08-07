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
	void 캐릭터_기본정보_조회_테스트() {
		String characterName = "나로펫팔라딘";
		ResponseEntity<SuccessResponse> response = characterController.getCharacterBasicInfo(characterName);
	}

	@Test
	void 캐릭터_정보_업데이트_테스트() {
		String characterName = "나로펫팔라딘";
		characterController.updateCharacterInfo(characterName, 1);
	}

	@Test
	void 본캐_찾기_통합_테스트() {
		String characterName = "아델";
		ResponseEntity<SuccessResponse> response = characterController.findMyCharacter(characterName);
		// assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
	}

	@Test
	void 경험치_히스토리_통합_테스트() {
		String characterName = "아델";
		ResponseEntity<SuccessResponse> response = characterController.getExpHistory(characterName);
	}

	@Test
	void 헥사_매트릭스_조회_테스트() {
		String characterName = "아델";
		ResponseEntity<SuccessResponse> response = characterController.getCharacterHexamatrix(characterName);
	}

	@Test
	void 헥사_매트릭스_없을때_조회_테스트() {
		String characterName = "단심히어로";
		ResponseEntity<SuccessResponse> response = characterController.getCharacterHexamatrix(characterName);
	}

	@Test
	void 캐릭터_비교_둘_다_없는_경우_테스트() {
		ResponseEntity<SuccessResponse> response = characterController.getCharacterCompare(null, null);
	}

	@Test
	void 캐릭터_비교_테스트() {
		String leftCharacterName = "아델";
		String rightCharacterName = "도적";
		ResponseEntity<SuccessResponse> response = characterController.getCharacterCompare(leftCharacterName, rightCharacterName);
	}

}