package com.maple.mapleservice.dto.response.Character;

import org.springframework.format.annotation.DateTimeFormat;

import com.maple.mapleservice.entity.Character;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Data
public class CharacterResponseDto {
	private String ocid;
	private String date;
	private String world_name;
	private String character_name;
	private Long combat_power;
	private String guild_name;
	private String parent_ocid;
	private String prev_name;
	private String oguild_id;
	private String character_class;
	private String character_class_level;
	private Long character_level;
	private String character_image;

	public static CharacterResponseDto of(Character character) {
		return CharacterResponseDto.builder()
			.ocid(character.getOcid())
			.date(character.getDate())
			.world_name(character.getWorld_name())
			.character_name(character.getCharacter_name())
			.combat_power(character.getCombat_power())
			.guild_name(character.getGuild_name())
			.parent_ocid(character.getParent_ocid())
			.prev_name(character.getPrev_name())
			.oguild_id(character.getOguild_id())
			.character_class(character.getCharacter_class())
			.character_class_level(character.getCharacter_class_level())
			.character_level(character.getCharacter_level())
			.character_image(character.getCharacter_image())
			.build();
	}
}
