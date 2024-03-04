package com.dnf.dnfservice.service.item;

import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.feign.ItemFeignClient;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemApiServiceImpl implements ItemApiService {
	private final ItemFeignClient itemFeignClient;

	@Override
	public ItemDetailDto getItemDetail(String itemId) {
		return itemFeignClient.getItemDetail(itemId);
	}
}
