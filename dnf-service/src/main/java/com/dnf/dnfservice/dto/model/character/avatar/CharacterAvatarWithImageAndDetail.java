package com.dnf.dnfservice.dto.model.character.avatar;

import java.util.List;

import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillAvatarEmblem;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterAvatarWithImageAndDetail {
	String slotId;
	String slotName;
	String itemId;
	String itemName;
	String itemImage;
	String itemRarity;
	CharacterItemCloneWithImageAndDetail clone;
	String optionAbility;
	List<BuffSkillAvatarEmblem> emblems;
	ItemDetailDto detail;

	public static CharacterAvatarWithImageAndDetail of(CharacterAvatar avatar, CharacterItemCloneWithImageAndDetail clone, ItemDetailDto detail) {
		return CharacterAvatarWithImageAndDetail.builder()
			.slotId(avatar.getSlotId())
			.slotName(avatar.getSlotName())
			.itemId(avatar.getItemId())
			.itemName(avatar.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + avatar.getItemId())
			.itemRarity(avatar.getItemRarity())
			.clone(clone)
			.optionAbility(avatar.getOptionAbility())
			.emblems(avatar.getEmblems())
			.detail(detail)
			.build();
	}
}
