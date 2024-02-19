package com.maple.mapleservice.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import com.maple.mapleservice.dto.response.SuccessResponse;

@SpringBootTest
public class UnionControllerTest {

	@Autowired
	CharacterController characterController;

	@Test
	void 유니온_정보_조회_테스트() {
		String characterName = "아델";
		ResponseEntity<SuccessResponse> response = characterController.getCharacterUnion(characterName);
	}

	@Test
	void 유니온_아티팩트_조회_테스트() {
		String characterName = "아델";
		ResponseEntity<SuccessResponse> response = characterController.getCharacterUnionArtifact(characterName);
	}
}
