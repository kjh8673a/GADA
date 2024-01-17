package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class GuildServiceImplTest {

    @Autowired
    GuildService guildService;

    String guildName = "리더";

    @Test
    void 길드정보_서버별_가져오기_테스트() {
        List<GuildBasicDto> guildBasicList = guildService.getGuildBasicInfosByServer(guildName);
        assertThat(guildBasicList).hasSize(10);

    }

    @Test
    void 길드이름_서벼벌_가져오기_테스트() {
        List<String> oguildIdList = guildService.getAllOguildIdByGuildName(guildName);
        assertThat(oguildIdList).hasSize(10);

    }
}