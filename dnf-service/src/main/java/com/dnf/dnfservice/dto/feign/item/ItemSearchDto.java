package com.dnf.dnfservice.dto.feign.item;

import java.util.List;

import com.dnf.dnfservice.dto.model.auction.AuctionSearchItem;
import com.dnf.dnfservice.dto.model.item.SearchItem;

import lombok.Getter;

@Getter
public class ItemSearchDto {
	List<SearchItem> rows;
}
