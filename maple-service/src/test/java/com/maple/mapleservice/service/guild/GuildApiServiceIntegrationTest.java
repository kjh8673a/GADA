package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.util.WorldName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
@SpringBootTest
class GuildApiServiceIntegrationTest {

    @Autowired
    GuildApiService guildApiService;
    String oguildId = "6c938a9e6da0db559d3e30c209a63bdc";

    @Test
    void 길드_oguild_id_찾기_테스트() {
        String key = guildApiService.getOguildIdKey("훈장교", WorldName.스카니아.name());
        assertThat(key).isEqualTo(oguildId);
    }

    @Test
    void 길드_정보_가져오기_테스트() {
        GuildBasicDto guildBasicDto = guildApiService.getGuildBasic(oguildId);
    }
}