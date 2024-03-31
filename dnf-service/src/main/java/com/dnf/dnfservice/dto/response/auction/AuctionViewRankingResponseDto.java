package com.dnf.dnfservice.dto.response.auction;

import java.util.List;

import com.dnf.dnfservice.dto.model.auction.AuctionViewRanking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuctionViewRankingResponseDto {
	List<AuctionViewRanking> ranking;
}
