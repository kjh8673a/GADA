package com.maple.mapleservice.repository.guild;

import com.maple.mapleservice.entity.Guild;

import java.util.List;

public interface GuildCustomRepository {

    void batchGuildInsert(List<Guild> guildInsertList);

    void batchGuildUpdate(List<Guild> guildUpdateList);

}
