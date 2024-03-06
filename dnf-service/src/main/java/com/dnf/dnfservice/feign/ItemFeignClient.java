package com.dnf.dnfservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.dnf.dnfservice.config.FeignConfig;
import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;

@FeignClient(name = "item-api", url = "${feign.dnf.url}" + "/items", configuration = FeignConfig.class)
public interface ItemFeignClient {

	@GetMapping("/{itemId}")
	ItemDetailDto getItemDetail(@PathVariable String itemId);
}
