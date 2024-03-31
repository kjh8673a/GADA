package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.model.character.flag.CharacterFlag;
import com.dnf.dnfservice.dto.model.character.flag.FlagGemWithImageAndDetail;
import com.dnf.dnfservice.dto.model.character.flag.FlagReinforceStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterFlagResponseDto {
	String itemId;
	String itemName;
	String itemImage;
	String itemRarity;
	Integer reinforce;
	ItemDetailDto detail;
	List<FlagReinforceStatus> reinforceStatus;
	List<FlagGemWithImageAndDetail> gems;

	public static CharacterFlagResponseDto of(CharacterFlag flag, ItemDetailDto detail, List<FlagGemWithImageAndDetail> gems) {
		return CharacterFlagResponseDto.builder()
			.itemId(flag.getItemId())
			.itemName(flag.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + flag.getItemId())
			.itemRarity(flag.getItemRarity())
			.reinforce(flag.getReinforce())
			.detail(detail)
			.reinforceStatus(flag.getReinforceStatus())
			.gems(gems)
			.build();
	}
}
