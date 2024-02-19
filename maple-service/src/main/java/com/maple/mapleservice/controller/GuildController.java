package com.maple.mapleservice.controller;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;
import com.maple.mapleservice.dto.response.SuccessResponse;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.service.guild.GuildService;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/maple-service/guild")
public class GuildController {

	private final GuildService guildService;

	@GetMapping("/basic")
	public ResponseEntity<SuccessResponse> getGuildBasicInfos(@RequestParam String guildName) {
		List<GuildBasicDto> guildBasicDtoList = guildService.getGuildBasicInfosByServer(guildName);
		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(guildBasicDtoList));
	}

	@GetMapping("/guildMembers")
	public ResponseEntity<SuccessResponse> getGuildMembers(@RequestParam String guildName, String worldName) {
		List<Character> characterBasicInfoList = guildService.getGuildMembers(guildName, worldName);
		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(characterBasicInfoList));
	}

	@GetMapping("/guildInfo")
	public ResponseEntity<SuccessResponse> getGuildInfo(@RequestParam String guildName, String worldName) {
		GuildBasicDto guildBasicDto = guildService.getGuildBasicInfo(guildName, worldName);
		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(guildBasicDto));
	}

}
