package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;

import java.util.List;

public interface GuildService {

    List<GuildBasicDto> getGuildBasicInfosByServer(String guildName);

    List<String> getAllOguildIdByGuildName(String guildName);
}
