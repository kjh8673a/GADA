package com.maple.mapleservice.service.ranking;

import java.util.List;

import org.springframework.stereotype.Service;

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
}
