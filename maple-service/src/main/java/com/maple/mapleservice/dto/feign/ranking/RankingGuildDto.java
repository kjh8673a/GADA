package com.maple.mapleservice.dto.feign.ranking;

import com.maple.mapleservice.dto.model.ranking.Guild;
import lombok.Getter;

import java.util.List;

@Getter
public class RankingGuildDto {
    List<Guild> ranking;
}
