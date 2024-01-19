package com.maple.mapleservice.dto.response.Ranking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CharacterCombatPowerRankingResponseDto {
	private String ocid;
	private String world_name;
	private String character_name;
	private Long combat_power;
	private String guild_name;
	private String oguild_id;
	private String character_class;
	private Long character_level;
	private String character_image;
}
