package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.util.WorldName;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class GuildApiServiceIntegrationTest {

    @Autowired
    GuildApiService guildApiService;
    String oguildId = "6c938a9e6da0db559d3e30c209a63bdc";

    @Test
    void getServerOguildIdKey() {
        String key = guildApiService.getOguildIdKey("훈장교", WorldName.스카니아.name());
        Assertions.assertThat(key).isEqualTo(oguildId);
    }

    @Test
    void getServerGuildBasic() {
        GuildBasicDto guildBasicDto = guildApiService.getGuildBasic(oguildId);
    }
}