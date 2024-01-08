package com.maple.mapleservice.service.character;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService{
    private final CharacterApiService characterApiService;
}
