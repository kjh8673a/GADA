package com.maple.mapleservice.controller;

import java.util.List;

import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;
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

}
