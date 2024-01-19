package com.maple.mapleservice.feign;

import com.maple.mapleservice.config.FeignConfig;
import com.maple.mapleservice.dto.feign.character.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "character-api", url = "${feign.maple.url}" + "/character", configuration = FeignConfig.class)
public interface CharacterFeignClient {

    @GetMapping("/basic")
    CharacterBasicDto getCharacterBasicDto(@RequestParam String ocid, @RequestParam String date);

    @GetMapping("/popularity")
    CharacterPopularityDto getCharacterPopularityDto(@RequestParam String ocid, @RequestParam String date);

    @GetMapping("/stat")
    CharacterStatDto getCharacterStatDto(@RequestParam String ocid, @RequestParam String date);

    @GetMapping("/hyper-stat")
    CharacterHyperStatDto getCharacterHyperStatDto(@RequestParam String ocid, @RequestParam String date);

    @GetMapping("/ability")
    CharacterAbilityDto getCharacterAbilityDto(@RequestParam String ocid, @RequestParam String date);

    @GetMapping("/item-equipment")
    CharacterItemDto getCharacterItemDto(@RequestParam String ocid, @RequestParam String date);

    @GetMapping("/cashitem-equipment")
    CharacterCashItemDto getCharacterCashItemDto(@RequestParam String ocid, @RequestParam String date);

    @GetMapping("/symbol-equipment")
    CharacterSymbolDto getCharacterSymbolDto(@RequestParam String ocid, @RequestParam String date);

    @GetMapping("/pet-equipment")
    CharacterPetDto getCharacterPetDto(@RequestParam String ocid, @RequestParam String date);

}
