package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.dto.model.character.FinalStat;
import lombok.Data;

import java.util.List;

@Data
public class CharacterStatDto {
    List<FinalStat> final_stat;
}
