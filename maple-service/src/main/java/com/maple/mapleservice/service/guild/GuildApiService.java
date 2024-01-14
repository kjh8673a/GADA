package com.maple.mapleservice.service.guild;


import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;

public interface GuildApiService {

    String getOguildIdKey(String guildName, String worldName);

    GuildBasicDto getGuildBasic(String oguildId);
}
