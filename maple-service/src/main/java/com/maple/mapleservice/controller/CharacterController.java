package com.maple.mapleservice.controller;

import java.util.List;

import com.maple.mapleservice.dto.feign.character.CharacterLinkSkillDto;
import com.maple.mapleservice.dto.feign.character.CharacterSkillDto;
import com.maple.mapleservice.dto.response.Character.CharacterCompareResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterExpHistoryResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterHexaMatrixResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterItemResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterStatsResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterVMatrixResponseDto;
import com.maple.mapleservice.dto.response.SuccessResponse;
import com.maple.mapleservice.dto.response.union.UnionInfoResponseDto;
import com.maple.mapleservice.service.character.CharacterApiService;
import com.maple.mapleservice.service.character.CharacterService;
import com.maple.mapleservice.service.union.UnionService;

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
    private final UnionService unionService;

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

    @RequestMapping("/getCharacterVMatrix")
    public ResponseEntity<SuccessResponse> getCharacterVmatrix(@RequestParam String characterName) {
        CharacterVMatrixResponseDto characterVMatrixResponseDto  = characterService.getCharacterVMatrix(characterName);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterVMatrixResponseDto));
    }

    @RequestMapping("/getCharacterHyperPassive")
    public ResponseEntity<SuccessResponse> getCharacterHyperPassive(@RequestParam String characterName) {
        CharacterSkillDto characterHyperPassiveDto = characterService.getCharacterHyperPassive(characterName);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterHyperPassiveDto));
    }

    @RequestMapping("/getCharacterLinkSkill")
    public ResponseEntity<SuccessResponse> getCharacterLinkSkill(@RequestParam String characterName) {
        CharacterLinkSkillDto characterLinkSkillDto = characterService.getCharacterLinkSkill(characterName);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterLinkSkillDto));
    }

    @RequestMapping("/getCharacterHexaMatrix")
    public ResponseEntity<SuccessResponse> getCharacterHexamatrix(@RequestParam String characterName) {
        CharacterHexaMatrixResponseDto characterHexaMatrixResponseDto = characterService.getCharacterHexaMatrix(characterName);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterHexaMatrixResponseDto));
    }

    @RequestMapping("/getCharacterUnion")
    public ResponseEntity<SuccessResponse> getCharacterUnion(@RequestParam String characterName) {
        UnionInfoResponseDto unionInfoResponseDto = unionService.getUnionInfoResponseDto(characterName);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(unionInfoResponseDto));
    }

    @RequestMapping("/getCharacterCompare")
    public ResponseEntity<SuccessResponse> getCharacterCompare(@RequestParam(required = false, defaultValue = "") String leftCharacterName, @RequestParam(required = false, defaultValue = "") String rightCharacterName) {
        CharacterCompareResponseDto characterCompareResponseDto = characterService.getCharacterCompare(leftCharacterName, rightCharacterName);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(SuccessResponse.of(characterCompareResponseDto));
    }

    @RequestMapping("/paramTest")
    public String getParamTest(@RequestParam(required = false) String a, @RequestParam(required = false) String b) {
        return "a : " + a + " b : " + b;
    }

}
