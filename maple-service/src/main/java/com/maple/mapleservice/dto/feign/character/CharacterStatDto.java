package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.dto.model.character.FinalStat;
import lombok.Getter;

import java.util.List;

@Getter
public class CharacterStatDto {
    List<FinalStat> final_stat;
}
