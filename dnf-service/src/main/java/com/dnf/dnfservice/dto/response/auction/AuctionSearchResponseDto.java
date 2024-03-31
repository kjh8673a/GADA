package com.dnf.dnfservice.dto.response.auction;

import java.util.List;

import com.dnf.dnfservice.dto.model.auction.AuctionSearchItemInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuctionSearchResponseDto {
	List<AuctionSearchItemInfo> items;

	public static AuctionSearchResponseDto of(List<AuctionSearchItemInfo> items) {
		return AuctionSearchResponseDto.builder()
			.items(items)
			.build();
	}
}
