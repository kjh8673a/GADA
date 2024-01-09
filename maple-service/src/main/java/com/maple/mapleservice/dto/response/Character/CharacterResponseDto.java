package com.maple.mapleservice.dto.response.Character;

import com.maple.mapleservice.entity.Character;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CharacterResponseDto {
	private String ocid;
	private String date;
	private String world_name;
	private String character_name;
	private Long combat_power;
	private String guild_name;
	private String prev_name;
	private String oguild_id;

	public static CharacterResponseDto of(Character character) {
		return CharacterResponseDto.builder()
			.ocid(character.getOcid())
			.date(character.getDate())
			.world_name(character.getWorld_name())
			.character_name(character.getCharacter_name())
			.combat_power(character.getCombat_power())
			.guild_name(character.getGuild_name())
			.prev_name(character.getPrev_name())
			.oguild_id(character.getOguild_id())
			.build();
	}
}
