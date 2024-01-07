package com.maple.mapleservice.feign;

import com.maple.mapleservice.config.FeignConfig;
import com.maple.mapleservice.dto.feign.character.CharacterStatDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name="character-api",url="${feign.maple.url}"+"/character", configuration = FeignConfig.class)
public interface CharacterFeignClient {

    @RequestMapping(method=RequestMethod.GET,
                    value="/stat")
    CharacterStatDto getCharacterStatDto (@RequestParam String ocid,@RequestParam String date);
}
