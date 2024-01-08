package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.dto.model.character.Ability;
import lombok.Getter;

import java.util.List;

@Getter
public class CharacterAbilityDto {
    String ability_grade;
    List<Ability> ability_info;
}
