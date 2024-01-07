package com.maple.mapleservice.entity.character;

import lombok.Data;

@Data
public class HyperStat {
    String stat_type;
    Integer stat_point;
    Integer stat_level;
    String stat_increase;
}
