package com.dnf.dnfservice.service.item;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;

public interface ItemApiService {
	ItemDetailDto getItemDetail(String itemId);
}
