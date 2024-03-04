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
		CharacterEquipmentDto characterEquipmentDto = characterApiService.getCharacterEquipment("hilder", "63f0da745d2c5fb06df125801e81b43f");
		characterEquipmentDto.getEquipment().stream().forEach(data -> {
			System.out.println(data.getItemName());
			ItemDetailDto itemDetailDto = itemApiService.getItemDetail(data.getItemId());
		});
	}
}
