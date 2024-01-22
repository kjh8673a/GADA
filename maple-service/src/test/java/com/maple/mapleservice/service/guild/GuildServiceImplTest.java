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
    void getGuildBasicInfosByServer() {
        List<GuildBasicDto> guildBasicList = guildService.getGuildBasicInfosByServer(guildName);
        assertThat(guildBasicList).hasSize(10);

    }

    @Test
    void getAllOguildIdByGuildName() {
        List<String> oguildIdList = guildService.getAllOguildIdByGuildName(guildName);
        assertThat(oguildIdList).hasSize(10);

    }
}