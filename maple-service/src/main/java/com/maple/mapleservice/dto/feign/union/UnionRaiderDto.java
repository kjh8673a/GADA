package com.maple.mapleservice.dto.feign.union;

import java.util.List;

import com.maple.mapleservice.dto.model.union.UnionBlock;
import com.maple.mapleservice.dto.model.union.UnionInnerStat;

import lombok.Getter;

@Getter
public class UnionRaiderDto {
	List<String> union_raider_stat;
	List<String> union_occupied_stat;
	List<UnionBlock> union_block;
	List<UnionInnerStat> union_inner_stat;
}
