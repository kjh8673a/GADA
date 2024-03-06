package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.model.character.avatar.CharacterItemCloneWithImageAndDetail;
import com.dnf.dnfservice.dto.model.character.creature.CreatureArtifactWithImageAndDetail;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterCreatureResponseDto {
	String itemId;
	String itemName;
	String itemImage;
	String itemRarity;
	CharacterItemCloneWithImageAndDetail clone;
	List<CreatureArtifactWithImageAndDetail> artifact;
	ItemDetailDto detail;

	public static CharacterCreatureResponseDto of(CharacterCreature creature, CharacterItemCloneWithImageAndDetail clone, List<CreatureArtifactWithImageAndDetail> artifact, ItemDetailDto detail) {
		return CharacterCreatureResponseDto.builder()
			.itemId(creature.getItemId())
			.itemName(creature.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + creature.getItemId())
			.itemRarity(creature.getItemRarity())
			.clone(clone)
			.artifact(artifact)
			.detail(detail)
			.build();
	}
}
