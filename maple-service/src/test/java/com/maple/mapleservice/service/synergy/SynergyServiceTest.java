package com.maple.mapleservice.service.synergy;

import static org.assertj.core.api.Assertions.*;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.maple.mapleservice.dto.model.synergy.SynergyCharacter;
import com.maple.mapleservice.dto.request.PartySynergyRequestDto;
import com.maple.mapleservice.util.synergy.SynergyCharacters;

@SpringBootTest
public class SynergyServiceTest {
	@Autowired
	SynergyService synergyService;
	
	@Autowired
	SynergyServiceImpl synergyServiceImpl;

	private SynergyCharacters synergyCharacters = new SynergyCharacters();
	
	@Test
	void Map_Key에_맞는_이름으로_변환_테스트() {
		String className = synergyServiceImpl.getCharacterClassName("아크메이지(불,독)");

		assertThat(className).isEqualTo("아크메이지_불_독");
	}
	
	@Test
	void Map에서_캐릭터_꺼내오기_테스트() {
		SynergyCharacter s = synergyCharacters.getSynergyCharacters().get("아델");

		assertThat(s).isNotNull();
	}

	@Test
	void 파티_시너지_선택_직업_비어있는_리스트_테스트() {
		PartySynergyRequestDto p = PartySynergyRequestDto.builder()
			.characterName("아델")
			.selectedCharacters(new ArrayList<>())
			.build();

		synergyService.partySynergy(p);
	}

	@Test
	void 파티_시너지_선택_직업_null_테스트() {
		PartySynergyRequestDto p = PartySynergyRequestDto.builder()
			.characterName("아델")
			.selectedCharacters(null)
			.build();

		synergyService.partySynergy(p);
	}
}
