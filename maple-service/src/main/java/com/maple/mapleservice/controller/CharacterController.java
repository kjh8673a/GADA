package com.maple.mapleservice.controller;

import java.util.List;

import com.maple.mapleservice.dto.response.Character.CharacterExpHistoryResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterItemResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterItemAndStatDto;
import com.maple.mapleservice.dto.response.Character.CharacterStatsResponseDto;
import com.maple.mapleservice.dto.response.SuccessResponse;
import com.maple.mapleservice.service.character.CharacterApiService;
import com.maple.mapleservice.service.character.CharacterService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/maple-service/character")
public class CharacterController {
    private final CharacterService characterService;
    private final CharacterApiService characterApiService;

    @RequestMapping("/basic")
    public String getBasicInfo(@RequestParam String characterName) {
        return null;
    }

    @RequestMapping("/findMyCharacter")
    public ResponseEntity<SuccessResponse> findMyCharacter(@RequestParam String characterName) {
        String parent_ocid = characterService.getParentOcidByCharacterName(characterName);
        List<CharacterResponseDto> characterResponseDtoList = characterService.findMainCharacter(parent_ocid);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterResponseDtoList));
    }

    @RequestMapping("/getExpHistory")
    public ResponseEntity<SuccessResponse> getExpHistory(@RequestParam String characterName) {
        String ocid = characterApiService.getOcidKey(characterName);
        List<CharacterExpHistoryResponseDto> characterExpHistoryResponseDtoList = characterService.getCharacterExpHistory(ocid);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterExpHistoryResponseDtoList));
    }

    @RequestMapping("/getCharacterBasicInfo")
    public ResponseEntity<SuccessResponse> getCharacterBasicInfo(@RequestParam String characterName) {
        CharacterBasicInfoResponseDto characterBasicInfoDto = characterService.getCharacterBasicInfo(characterName);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterBasicInfoDto));
    }

    @RequestMapping("/getCharacterItem")
    public ResponseEntity<SuccessResponse> getCharacterItem(@RequestParam String characterName) {
        CharacterItemResponseDto characterItemResponseDto = characterService.getCharacterItem(characterName);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterItemResponseDto));
    }

    @RequestMapping("/getCharacterStats")
    public ResponseEntity<SuccessResponse> getCharacterStats(@RequestParam String characterName) {
        CharacterStatsResponseDto characterStatsResponseDto = characterService.getCharacterStats(characterName);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterStatsResponseDto));
    }

}
