package com.dnf.dnfservice.dto.model.character.avatar;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.CharacterItemClone;
import com.dnf.dnfservice.dto.model.character.buff.BuffSkillAvatarEmblem;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterAvatarWithImage {
	String slotId;
	String slotName;
	String itemId;
	String itemName;
	String itemImage;
	String itemRarity;
	CharacterItemClone clone;
	String optionAbility;
	List<BuffSkillAvatarEmblem> emblems;

	public static CharacterAvatarWithImage of(CharacterAvatar avatar) {
		return CharacterAvatarWithImage.builder()
			.slotId(avatar.getSlotId())
			.slotName(avatar.getSlotName())
			.itemId(avatar.getItemId())
			.itemName(avatar.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + avatar.getItemId())
			.itemRarity(avatar.getItemRarity())
			.clone(avatar.getClone())
			.optionAbility(avatar.getOptionAbility())
			.emblems(avatar.getEmblems())
			.build();
	}
}
