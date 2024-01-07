package com.maple.mapleservice.service;

import com.maple.mapleservice.dto.feign.character.CharacterStatDto;
import com.maple.mapleservice.feign.CharacterFeignClient;
import com.maple.mapleservice.feign.OcidFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService{
    private final OcidFeignClient ocidFeignClient;
    private final CharacterFeignClient characterFeignClient;
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private final String date = LocalDate.now().minusDays(1).format(formatter);
    @Override
    @Cacheable(value = "ocid", key = "#characterName")
    public String getOcidKey(String characterName) {
        return ocidFeignClient.getOcidDTO(characterName).getOcid();
    }

    @Override
    @Cacheable(value="stat", key= "#ocid")
    public CharacterStatDto getCharacterStat(String ocid) {
        return characterFeignClient.getCharacterStatDto(ocid,date);
    }


}
