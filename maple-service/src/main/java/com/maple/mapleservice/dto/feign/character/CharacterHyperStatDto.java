package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.dto.model.character.HyperStat;
import lombok.Data;

import java.util.List;

@Data
public class CharacterHyperStatDto {
    String use_preset_no;
    List<HyperStat> hyper_stat_preset_1;
    List<HyperStat> hyper_stat_preset_2;
    List<HyperStat> hyper_stat_preset_3;
}
