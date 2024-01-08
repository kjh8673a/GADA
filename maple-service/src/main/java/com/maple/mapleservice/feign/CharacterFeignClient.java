package com.maple.mapleservice.feign;

import com.maple.mapleservice.config.FeignConfig;
import com.maple.mapleservice.dto.feign.character.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "character-api", url = "${feign.maple.url}" + "/character", configuration = FeignConfig.class)
public interface CharacterFeignClient {

    @RequestMapping(method = RequestMethod.GET,
            value = "/basic")
    CharacterBasicDto getCharacterBasicDto(@RequestParam String ocid, @RequestParam String date);

    @RequestMapping(method = RequestMethod.GET,
            value = "/popularity")
    CharacterPopularityDto getCharacterPopularityDto(@RequestParam String ocid, @RequestParam String date);

    @RequestMapping(method = RequestMethod.GET,
            value = "/stat")
    CharacterStatDto getCharacterStatDto(@RequestParam String ocid, @RequestParam String date);

    @RequestMapping(method = RequestMethod.GET,
            value = "/hyper-stat")
    CharacterHyperStatDto getCharacterHyperStatDto(@RequestParam String ocid, @RequestParam String date);

    @RequestMapping(method = RequestMethod.GET,
            value = "/ability")
    CharacterAbilityDto getCharacterAbilityDto(@RequestParam String ocid, @RequestParam String date);

    @RequestMapping(method = RequestMethod.GET,
            value = "/item-equipment")
    CharacterItemDto getCharacterItemDto(@RequestParam String ocid, @RequestParam String date);

    @RequestMapping(method = RequestMethod.GET,
            value = "/cashitem-equipment")
    CharacterCashItemDto getCharacterCashItemDto(@RequestParam String ocid, @RequestParam String date);

    @RequestMapping(method = RequestMethod.GET,
            value = "/symbol-equipment")
    CharacaterSymbolDto getCharacterSymbolDto(@RequestParam String ocid, @RequestParam String date);

    @RequestMapping(method = RequestMethod.GET,
            value = "/pet-equipment")
    CharacterPetDto getCharacterPetDto(@RequestParam String ocid, @RequestParam String date);

}
