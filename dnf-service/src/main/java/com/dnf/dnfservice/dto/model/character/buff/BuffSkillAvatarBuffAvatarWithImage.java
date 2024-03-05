package com.dnf.dnfservice.dto.model.character.buff;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BuffSkillAvatarBuffAvatarWithImage {
	String slotId;
	String slotName;
	String itemId;
	String itemName;
	String itemImage;
	String itemRarity;
	String cloneAvatarName;
	String optionAbility;
	List<BuffSkillAvatarEmblem> emblems;

	public static BuffSkillAvatarBuffAvatarWithImage of(BuffSkillAvatarBuffAvatar avatar) {
		return BuffSkillAvatarBuffAvatarWithImage.builder()
			.slotId(avatar.getSlotId())
			.slotName(avatar.getSlotName())
			.itemId(avatar.getItemId())
			.itemName(avatar.getItemName())
			.itemImage("https://img-api.neople.co.kr/df/items/" + avatar.getItemId())
			.itemRarity(avatar.getItemRarity())
			.cloneAvatarName(avatar.getCloneAvatarName())
			.optionAbility(avatar.getOptionAbility())
			.emblems(avatar.getEmblems())
			.build();
	}


}
