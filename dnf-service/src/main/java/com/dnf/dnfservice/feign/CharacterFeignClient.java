package com.dnf.dnfservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.dnf.dnfservice.config.FeignConfig;
import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentTraitDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.feign.character.CharacterStatusDto;

@FeignClient(name = "character-api", url = "${feign.dnf.url}" + "/servers", configuration = FeignConfig.class)
public interface CharacterFeignClient {

	@GetMapping("/{serverId}/characters")
	CharacterSearchDto searchCharacters(@PathVariable String serverId, @RequestParam String characterName, @RequestParam String wordType);

	@GetMapping("/{serverId}/characters/{characterId}")
	CharacterBasicInfoDto getCharacterBasicInfo(@PathVariable String serverId, @PathVariable String characterId);

	@GetMapping("/{serverId}/characters/{characterId}/status")
	CharacterStatusDto getCharacterStatus(@PathVariable String serverId, @PathVariable String characterId);

	@GetMapping("/{serverId}/characters/{characterId}/equip/equipment")
	CharacterEquipmentDto getCharacterEquipment(@PathVariable String serverId, @PathVariable String characterId);

	@GetMapping("/{serverId}/characters/{characterId}/equip/equipment-trait")
	CharacterEquipmentTraitDto getCharacterEquipmentTrait(@PathVariable String serverId, @PathVariable String characterId);


}
