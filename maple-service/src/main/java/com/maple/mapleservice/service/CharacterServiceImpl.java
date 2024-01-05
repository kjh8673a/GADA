package com.maple.mapleservice.service;

import com.maple.mapleservice.feign.OcidFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService{
    private final OcidFeignClient ocidFeignClient;

    @Override
    @Cacheable(value = "ocid", key = "#characterName", cacheManager = "cacheManager")
    public String getOcidKey(String characterName) {
        return ocidFeignClient.getOcidDTO(characterName).getOcid();
    }
}
