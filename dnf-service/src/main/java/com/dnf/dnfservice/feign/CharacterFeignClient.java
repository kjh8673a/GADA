package com.dnf.dnfservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dnf.dnfservice.config.FeignConfig;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;

@FeignClient(name = "servers-api", url = "${feign.dnf.url}" + "/servers", configuration = FeignConfig.class)
public interface CharacterFeignClient {

	@GetMapping("/all/characters")
	CharacterSearchDto searchCharacters(@RequestParam String characterName, @RequestParam String wordType);


}
