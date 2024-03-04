package com.dnf.dnfservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dnf.dnfservice.dto.response.SuccessResponse;
import com.dnf.dnfservice.service.character.CharacterService;

import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dnf-service/character")
public class CharacterController {
	private final CharacterService characterService;

	@RequestMapping("/searchCharacters")
	public ResponseEntity<SuccessResponse> searchCharacters(@RequestParam @Size(min = 2, max = 12) String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.searchCharacters(characterName)));
	}

	@RequestMapping("/getCharacterInformation")
	public ResponseEntity<SuccessResponse> getCharacterInformation(@RequestParam String serverName, @RequestParam String characterName, @RequestParam Integer type) {
		if(type == 1) {
			characterService.removeCharacterInformation(serverName, characterName);
		}

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterInformation(serverName, characterName)));
	}

	@RequestMapping("/getCharacterBasicInfo")
	public ResponseEntity<SuccessResponse> getCharacterBasicInfo(@RequestParam String serverName, @RequestParam String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterBasicInfo(serverName, characterName)));
	}

	@RequestMapping("/getCharacterStat")
	public ResponseEntity<SuccessResponse> getCharacterStat(@RequestParam String serverName, @RequestParam String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterStat(serverName, characterName)));
	}

	@RequestMapping("/getCharacterEquipment")
	public ResponseEntity<SuccessResponse> getCharacterEquipment(@RequestParam String serverName, @RequestParam String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterEquipment(serverName, characterName)));
	}

}
