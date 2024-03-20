package com.dnf.dnfservice.dto.feign.auction;

import java.util.List;

import com.dnf.dnfservice.dto.model.auction.AuctionSoldItem;

import lombok.Getter;

@Getter
public class AuctionSoldDto {
	List<AuctionSoldItem> rows;
}
