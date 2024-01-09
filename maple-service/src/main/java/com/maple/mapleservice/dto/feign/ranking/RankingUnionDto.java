package com.maple.mapleservice.dto.feign.ranking;

import java.util.List;

import com.maple.mapleservice.dto.model.ranking.Union;

import lombok.Getter;

@Getter
public class RankingUnionDto {
    List<Union> ranking;
}
