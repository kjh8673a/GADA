package com.dnf.dnfservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dnf.dnfservice.dto.response.SuccessResponse;
import com.dnf.dnfservice.dto.response.character.CharacterInformationResponseDto;
import com.dnf.dnfservice.service.character.CharacterService;

import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dnf-service/character")
public class CharacterController {
	private final CharacterService characterService;

	@RequestMapping("/searchCharacters")
	public ResponseEntity<SuccessResponse> searchCharacters(@RequestParam @Size(min = 1, max = 12) String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.searchCharacters(characterName)));
	}

	@RequestMapping("/getCharacterInformation")
	public ResponseEntity<SuccessResponse> getCharacterInformation(@RequestParam String serverName, @RequestParam String characterName, @RequestParam(required = false) boolean update) {
		if(update) {
			characterService.removeCharacterInformation(serverName, characterName);
		}

		CharacterInformationResponseDto characterInformationResponseDto = characterService.getCharacterInformation(serverName, characterName);
		characterService.addCharacterViewCount(serverName, characterName);

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterInformationResponseDto));
	}

	// @RequestMapping("/getCharacterBasicInfo")
	// public ResponseEntity<SuccessResponse> getCharacterBasicInfo(@RequestParam String serverName, @RequestParam String characterName) {
	//
	// 	return ResponseEntity
	// 		.status(HttpStatus.OK)
	// 		.body(SuccessResponse.of(characterService.getCharacterBasicInfo(serverName, characterName)));
	// }
	//
	// @RequestMapping("/getCharacterStat")
	// public ResponseEntity<SuccessResponse> getCharacterStat(@RequestParam String serverName, @RequestParam String characterName) {
	//
	// 	return ResponseEntity
	// 		.status(HttpStatus.OK)
	// 		.body(SuccessResponse.of(characterService.getCharacterStat(serverName, characterName)));
	// }
	//
	// @RequestMapping("/getCharacterEquipment")
	// public ResponseEntity<SuccessResponse> getCharacterEquipment(@RequestParam String serverName, @RequestParam String characterName) {
	//
	// 	return ResponseEntity
	// 		.status(HttpStatus.OK)
	// 		.body(SuccessResponse.of(characterService.getCharacterEquipment(serverName, characterName)));
	// }

	@RequestMapping("/getCharacterBuffEquipment")
	public ResponseEntity<SuccessResponse> getCharacterBuffEquipment(@RequestParam String serverName, @RequestParam String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterBuffEquipment(serverName, characterName)));
	}

	@RequestMapping("/getCharacterBuffAvatar")
	public ResponseEntity<SuccessResponse> getCharacterBuffAvatar(@RequestParam String serverName, @RequestParam String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterBuffAvatar(serverName, characterName)));
	}

	@RequestMapping("/getCharacterBuffCreature")
	public ResponseEntity<SuccessResponse> getCharacterBuffCreature(@RequestParam String serverName, @RequestParam String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterBuffCreature(serverName, characterName)));
	}

	@RequestMapping("/getCharacterSkill")
	public ResponseEntity<SuccessResponse> getCharacterSkill(@RequestParam String serverName, @RequestParam String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterSkill(serverName, characterName)));
	}

	@RequestMapping("/getCharacterAvatar")
	public ResponseEntity<SuccessResponse> getCharacterAvatar(@RequestParam String serverName, @RequestParam String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterAvatar(serverName, characterName)));
	}

	@RequestMapping("/getCharacterCreature")
	public ResponseEntity<SuccessResponse> getCharacterCreature(@RequestParam String serverName, @RequestParam String characterName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterService.getCharacterCreature(serverName, characterName)));
	}

}
