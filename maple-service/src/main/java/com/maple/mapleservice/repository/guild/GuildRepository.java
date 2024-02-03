package com.maple.mapleservice.repository.guild;

import com.maple.mapleservice.entity.Guild;
import com.maple.mapleservice.repository.ranking.RankingCustomRepository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuildRepository  extends JpaRepository<Guild, Long>, GuildCustomRepository {

    Guild findByOguildId(String oguildId);

}
