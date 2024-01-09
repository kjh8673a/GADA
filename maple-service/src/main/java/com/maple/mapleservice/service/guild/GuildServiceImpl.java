package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.util.WorldName;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class GuildServiceImpl implements GuildService{

    private final GuildApiService guildApiService;

    @Override
    public List<GuildBasicDto> getGuildBasicInfosByServer(String guildName) {
        List<GuildBasicDto> guildBasicList = new ArrayList<>();
        List<String> oguildIdList = getAllOguildIdByGuildName(guildName);

        for(String oguildId : oguildIdList){
            guildBasicList.add(guildApiService.getGuildBasic(oguildId));
        }

        return guildBasicList;
    }

    public List<String> getAllOguildIdByGuildName(String guildName){
        List<String> oguildIdList = new ArrayList<>();

        for(WorldName worldName : WorldName.values()){
            Optional<String> oguildId = Optional.ofNullable(guildApiService.getOguildIdKey(guildName, worldName.name()));
            oguildId.ifPresent(oguildIdList::add);

        }

        return oguildIdList;
    }
}
