package com.maple.mapleservice.feign;

import com.maple.mapleservice.config.FeignConfig;
import com.maple.mapleservice.dto.feign.guild.GuildOguildIdDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "oguildId-api", url = "${feign.maple.url}" + "/guild", configuration = FeignConfig.class)
public interface OguildIdFeignClient {

    @GetMapping("/id")
    GuildOguildIdDto getOguildId(@RequestParam("guild_name") String guildName, @RequestParam("world_name") String worldName);
}
