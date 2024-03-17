package com.dnf.dnfservice.dto.feign.auction;

import java.util.List;

import com.dnf.dnfservice.dto.model.auction.AuctionSearchItem;

import lombok.Getter;

@Getter
public class AuctionSearchDto {
	List<AuctionSearchItem> rows;
}
