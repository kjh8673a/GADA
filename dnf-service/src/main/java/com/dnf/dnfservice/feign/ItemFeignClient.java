package com.dnf.dnfservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.dnf.dnfservice.config.FeignConfig;
import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.feign.item.ItemSearchDto;

@FeignClient(name = "item-api", url = "${feign.dnf.url}" + "/items", configuration = FeignConfig.class)
public interface ItemFeignClient {

	@GetMapping("")
	ItemSearchDto searchItems(@RequestParam String itemName, @RequestParam Integer limit, @RequestParam String wordType);


	@GetMapping("/{itemId}")
	ItemDetailDto getItemDetail(@PathVariable String itemId);
}
