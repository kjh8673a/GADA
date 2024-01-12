package com.maple.mapleservice.dto.feign.ranking;

import java.util.List;

import com.maple.mapleservice.dto.model.ranking.Overall;

import lombok.Getter;

@Getter
public class RankingOverallDto {
	private List<Overall> ranking;
}
