package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.entity.Guild;
import com.maple.mapleservice.repository.guild.GuildRepository;
import com.maple.mapleservice.util.CommonUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Slf4j
@Service
@RequiredArgsConstructor
public class GuildSchedule {

    private final GuildApiService guildApiService;
    private final GuildRepository guildRepository;

    private final RedisTemplate redisTemplate;
    private final CommonUtil commonUtil = new CommonUtil();

    @Transactional
    @Scheduled(cron = "0 0/5 * * * ?")
    public void addGuildFromRedis(){
        log.info("길드 DB에 저장");

        Set<String> oguildIds = redisTemplate.opsForSet().members("addGuildToDB");
        List<Guild> guilds = new ArrayList<>();
        for(String oguildId : oguildIds){
            redisTemplate.opsForSet().remove("addGuildToDB", oguildId);
            Guild findGuild = guildRepository.findByOguildId(oguildId);
            if(findGuild != null) continue;

            GuildBasicDto guildBasicDto = guildApiService.getGuildBasic(oguildId);
            Guild guild = Guild.builder()
                    .oguildId(oguildId)
                    .date(commonUtil.date)
                    .name(guildBasicDto.getGuild_name())
                    .worldName(guildBasicDto.getWorld_name())
                    .masterName(guildBasicDto.getGuild_master_name())
                    .combatPower(0L)
                    .level(guildBasicDto.getGuild_level().longValue())
                    .build();

            guilds.add(guild);

        }

        guildRepository.batchGuildInsert(guilds);
    }
}
