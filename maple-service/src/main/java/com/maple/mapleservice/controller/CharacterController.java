package com.maple.mapleservice.controller;

import com.maple.mapleservice.service.character.CharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/maple-service/character")
public class CharacterController {
    private final CharacterService characterService;

    @RequestMapping("/basic")
    public String getBasicInfo(@RequestParam String characterName) {
        return null;
    }

}
