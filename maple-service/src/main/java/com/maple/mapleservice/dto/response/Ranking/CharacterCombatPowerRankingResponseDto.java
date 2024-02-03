package com.maple.mapleservice.dto.response.Ranking;

import com.maple.mapleservice.entity.Character;

import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CharacterCombatPowerRankingResponseDto {
	private Long rank;
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
