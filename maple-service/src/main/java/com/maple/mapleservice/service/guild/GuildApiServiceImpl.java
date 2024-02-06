package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.feign.GuildFeignClient;
import com.maple.mapleservice.feign.OguildIdFeignClient;
import com.maple.mapleservice.util.CommonUtil;
import com.maple.mapleservice.util.cache.RedisCacheable;

import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GuildApiServiceImpl implements GuildApiService{

    private final OguildIdFeignClient oguildidFeignClient;
    private final GuildFeignClient guildFeignClient;
    private final CommonUtil commonUtil = new CommonUtil();

    // 길드 이름으로 서버의 oguildid를 찾는다.
    @Override
    @RedisCacheable(value = "guild-api-oguildId")
    public String getOguildIdKey(String guildName, String worldName) {

        return oguildidFeignClient.getOguildId(guildName, worldName).getOguild_id();
    }

    // 길드 식별자로 길드를 조회한다.
    @Override
    @RedisCacheable(value = "guild-api-basic")
    public GuildBasicDto getGuildBasic(String oguildId){

        return guildFeignClient.getGuildBasicDto(oguildId, commonUtil.getDate());
    }
}
