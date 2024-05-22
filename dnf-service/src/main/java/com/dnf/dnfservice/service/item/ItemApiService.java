package com.dnf.dnfservice.service.item;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.feign.item.ItemSearchDto;

public interface ItemApiService {
	ItemDetailDto getItemDetail(String itemId);
	ItemSearchDto searchItems(String itemName, String wordType);
}
