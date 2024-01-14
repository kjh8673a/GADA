package com.maple.mapleservice.dto.feign.character;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CharacterBasicDto {
    String character_name;
    String world_name;
    String character_gender;
    String character_class;
    String character_class_level;
    Integer character_level;
    Long character_exp;
    String character_exp_rate;
    String character_guild_name;
    String character_image;
}
