package com.maple.mapleservice.service.ranking;

import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.model.ranking.Overall;
import com.maple.mapleservice.dto.model.ranking.Union;
import com.maple.mapleservice.feign.RankingFeignClient;
import com.maple.mapleservice.util.CommonUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RankingApiServiceImpl implements RankingApiService {
	private final RankingFeignClient rankingFeignClient;

	private CommonUtil commonUtil = new CommonUtil();

	@Override
	public List<Union> getRankingUnion(String ocid, String world_name) {
		return rankingFeignClient.rankingUnionDto(ocid, commonUtil.date, world_name).getRanking();
	}

	@Override
	@Cacheable(value = "ranking-overall", key = "#world_type + '_' + #page")
	public List<Overall> getRankingOverall(int world_type, int page) {
		return rankingFeignClient.rankingOverallDto(commonUtil.date, world_type, page).getRanking();
	}

}
