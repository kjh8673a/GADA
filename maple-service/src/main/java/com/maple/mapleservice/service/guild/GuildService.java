package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;
import com.maple.mapleservice.entity.Character;

import java.util.List;

public interface GuildService {

    void addGuildInformationToDB(String oguildId);

    void addGuildInformationToDB(List<String> oguildIds);
    List<GuildBasicDto> getGuildBasicInfosByServer(String guildName);

    List<String> getAllOguildIdByGuildName(String guildName);

    List<Character> getGuildMembers(String guildName, String worldName);
}
