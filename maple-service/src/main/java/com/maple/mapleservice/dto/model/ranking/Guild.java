package com.maple.mapleservice.dto.model.ranking;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Guild {
    Long ranking;
    String guild_name;
    String world_name;
    Long guild_level;
    String guild_master_name;
    String guild_mark;
    Long guild_point;
}
