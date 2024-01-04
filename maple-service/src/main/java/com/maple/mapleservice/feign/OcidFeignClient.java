package com.maple.mapleservice.feign;

import com.maple.mapleservice.config.FeignConfig;

import com.maple.mapleservice.dto.feign.character.CharacterIdDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name="ocid",url="${feign.maple.url}", configuration = FeignConfig.class)
public interface OcidFeignClient {
    @GetMapping(value = "/v1/id")
    CharacterIdDTO getOcidDTO(@RequestParam("character_name") String characterName);
}
