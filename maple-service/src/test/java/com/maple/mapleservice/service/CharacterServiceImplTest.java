package com.maple.mapleservice.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class CharacterServiceImplTest {
    @Autowired
    CharacterService characterService;
    @Test
    void getOcidKey() {
        String key = characterService.getOcidKey("아델");
        System.out.println("key = " + key);
        Assertions.assertThat(key).isEqualTo("e0a4f439e53c369866b55297d2f5f4eb");
    }

}