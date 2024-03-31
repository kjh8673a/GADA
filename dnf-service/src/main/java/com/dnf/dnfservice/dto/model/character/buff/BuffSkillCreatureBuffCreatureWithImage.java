package com.dnf.dnfservice.dto.model.character.buff;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BuffSkillCreatureBuffCreatureWithImage {
	String itemId;
	String itemName;
	String itemImage;
	String itemRarity;

	public static BuffSkillCreatureBuffCreatureWithImage of(BuffSkillCreatureBuffCreature creature) {
		return BuffSkillCreatureBuffCreatureWithImage.builder()
			.itemId(creature.getItemId())
			.itemName(creature.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + creature.getItemId())
			.itemRarity(creature.getItemRarity())
			.build();
	}
}
