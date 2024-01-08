package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.dto.model.character.Ability;
import lombok.Data;

import java.util.List;

@Data
public class CharacterAbilityDto {
    String ability_grade;
    List<Ability> ability_info;
}
