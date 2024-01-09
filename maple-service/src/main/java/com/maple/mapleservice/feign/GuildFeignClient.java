package com.maple.mapleservice.feign;

import com.maple.mapleservice.config.FeignConfig;
import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "guild-api", url = "${feign.maple.url}" + "/guild", configuration = FeignConfig.class)
public interface GuildFeignClient {

    // 길드 기본 정보 조회
    @GetMapping("/basic")
    public GuildBasicDto getGuildBasicDto(@RequestParam(name = "oguild_id") String oguildId, @RequestParam String date);
}
