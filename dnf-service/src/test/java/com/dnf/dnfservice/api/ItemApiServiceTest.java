package com.dnf.dnfservice.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentDto;
import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.service.character.CharacterApiService;
import com.dnf.dnfservice.service.item.ItemApiService;

@SpringBootTest
public class ItemApiServiceTest {
	@Autowired
	CharacterApiService characterApiService;

	@Autowired
	ItemApiService itemApiService;

	@Test
	void 아이템_상세정보조회() {
		CharacterEquipmentDto characterEquipmentDto = characterApiService.getCharacterEquipment("hilder", "486ed989d4fe9ca601a31ab5a9c8df85");
		characterEquipmentDto.getEquipment().stream().forEach(data -> {
			System.out.println(data.getItemName());
			ItemDetailDto itemDetailDto = itemApiService.getItemDetail(data.getItemId());
		});
	}
}
