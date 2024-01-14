package com.maple.mapleservice.dto.feign.guild;

import com.maple.mapleservice.dto.model.guild.GuildNoblesseSkill;
import com.maple.mapleservice.dto.model.guild.GuildSkill;
import lombok.Getter;

import java.util.List;

@Getter
public class GuildBasicDto {
    String world_name;
    String guild_name;
    Integer guild_level;
    Integer guild_fame;
    Integer guild_point;
    String guild_master_name;
    Integer guild_member_count;
    List<String> guild_member;
    List<GuildSkill> guild_skill;
    List<GuildNoblesseSkill> guild_noblesse_skill;
    String guild_mark;
    String guild_mark_custom;
}
