package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;

import java.util.List;

public interface GuildService {

    List<GuildBasicDto> getGuildBasicInfosByServer(String guildName);

    List<String> getAllOguildIdByGuildName(String guildName);

    List<CharacterBasicInfoResponseDto> getGuildMembers(String guildName, String worldName);
}
