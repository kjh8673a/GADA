package com.maple.mapleservice.service.ranking;

import java.util.List;

import com.maple.mapleservice.dto.model.ranking.Union;

public interface RankingApiService {
	List<Union> getRankingUnion(String ocid, String world_name);
}
