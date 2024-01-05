package com.maple.mapleservice.controller;

import com.maple.mapleservice.service.CharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CharacterController {
    private final CharacterService characterService;

    @RequestMapping("ocid")
    public String getOcid(@RequestParam String characterName){
        return characterService.getOcidKey(characterName);
    }
}
