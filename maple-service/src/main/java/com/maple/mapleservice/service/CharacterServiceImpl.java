package com.maple.mapleservice.service;

import com.maple.mapleservice.feign.OcidFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService{
    private final OcidFeignClient ocidFeignClient;

    @Override
    public String getOcidKey(String characterName) {
        return ocidFeignClient.getOcidDTO(characterName).getOcid();
    }
}
