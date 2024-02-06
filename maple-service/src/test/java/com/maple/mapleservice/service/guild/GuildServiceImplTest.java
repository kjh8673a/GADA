package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;
import com.maple.mapleservice.entity.Character;

import com.maple.mapleservice.entity.Guild;
import com.maple.mapleservice.repository.guild.GuildRepository;
import com.maple.mapleservice.util.CommonUtil;
import com.maple.mapleservice.util.WorldName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class GuildServiceImplTest {

    @Autowired
    GuildService guildService;
    @Autowired
    RedisTemplate redisTemplate;
    CommonUtil commonUtil = new CommonUtil();
    @Autowired
    GuildRepository guildRepository;
    @Autowired
    GuildApiService guildApiService;

    String guildName = "리더";

    @Test
    void 길드정보_서버별_가져오기_테스트() {
        List<GuildBasicDto> guildBasicList = guildService.getGuildBasicInfosByServer(guildName);
        assertThat(guildBasicList).hasSize(11);

    }

    @Test
    void 길드이름_서벼벌_가져오기_테스트() {
        List<String> oguildIdList = guildService.getAllOguildIdByGuildName(guildName);
        assertThat(oguildIdList).hasSize(11);

    }

    @Test
    void 길드_멤버_정보_가져오기_테스트() {
        List<Character> list = guildService.getGuildMembers(guildName, WorldName.스카니아.name());
        // System.out.println(list.size());
        // for(Character c : list) {
        //     System.out.println(c.getCharacter_name());
        // }
        // System.out.println(list.get(0).getCharacter_name());
    }

}