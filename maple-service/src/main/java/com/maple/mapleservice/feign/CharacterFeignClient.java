package com.maple.mapleservice.feign;

import com.maple.mapleservice.config.FeignConfig;
import com.maple.mapleservice.dto.feign.character.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "character-api", url = "${feign.maple.url}" + "/character", configuration = FeignConfig.class)
public interface CharacterFeignClient {

    @GetMapping("/basic")
    CharacterBasicDto getCharacterBasicDto(@RequestParam String ocid);

    @GetMapping("/basic")
    CharacterBasicDto getCharacterBasicDateDto(@RequestParam String ocid, @RequestParam String date);

    @GetMapping("/popularity")
    CharacterPopularityDto getCharacterPopularityDto(@RequestParam String ocid);

    @GetMapping("/stat")
    CharacterStatDto getCharacterStatDto(@RequestParam String ocid);

    @GetMapping("/hyper-stat")
    CharacterHyperStatDto getCharacterHyperStatDto(@RequestParam String ocid);

    @GetMapping("/ability")
    CharacterAbilityDto getCharacterAbilityDto(@RequestParam String ocid);

    @GetMapping("/item-equipment")
    CharacterItemDto getCharacterItemDto(@RequestParam String ocid);

    @GetMapping("/cashitem-equipment")
    CharacterCashItemDto getCharacterCashItemDto(@RequestParam String ocid);

    @GetMapping("/symbol-equipment")
    CharacterSymbolDto getCharacterSymbolDto(@RequestParam String ocid);

    @GetMapping("/pet-equipment")
    CharacterPetDto getCharacterPetDto(@RequestParam String ocid);

    @GetMapping("/vmatrix")
    CharacterVMatrixDto getCharacterVMatrixDto(@RequestParam String ocid);

    @GetMapping("/skill")
    CharacterSkillDto getCharacterSkillDto(@RequestParam String ocid, @RequestParam String character_skill_grade);

    @GetMapping("/link-skill")
    CharacterLinkSkillDto getCharacterLinkSkillDto(@RequestParam String ocid);

    @GetMapping("/hexamatrix")
    CharacterHexaMatrixDto getCharacterHexaMatrixDto(@RequestParam String ocid);

    @GetMapping("/hexamatrix-stat")
    CharacterHexaMatrixStatDto getCharacterHexamatrixStatDto(@RequestParam String ocid);
}
