package com.maple.mapleservice.dto.response.Character;

import java.time.LocalDateTime;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterBasicInfoResponseDto {
	LocalDateTime updatedTime;
	String ocid;
	String character_name;
	String world_name;
	String character_gender;
	String character_class;
	Integer character_level;
	Long character_exp;
	String character_exp_rate;
	String prev_name;
	String oguild_id;
	String character_guild_name;
	String character_image;
	Integer popularity;
	String combat_power;

	public static CharacterBasicInfoResponseDto of(String ocid, CharacterBasicDto characterBasicDto, Integer popularity,
		String combat_power, String prev_name, String oguild_id) {
		return CharacterBasicInfoResponseDto.builder()
			.updatedTime(LocalDateTime.now())
			.ocid(ocid)
			.character_name(characterBasicDto.getCharacter_name())
			.world_name(characterBasicDto.getWorld_name())
			.character_gender(characterBasicDto.getCharacter_gender())
			.character_class(characterBasicDto.getCharacter_class())
			.character_level(characterBasicDto.getCharacter_level())
			.character_exp(characterBasicDto.getCharacter_exp())
			.character_exp_rate(characterBasicDto.getCharacter_exp_rate())
			.prev_name(prev_name)
			.oguild_id(oguild_id)
			.character_guild_name(characterBasicDto.getCharacter_guild_name())
			.character_image(characterBasicDto.getCharacter_image())
			.popularity(popularity)
			.combat_power(combat_power)
			.build();
	}

	public static CharacterBasicInfoResponseDto ofGuildMember(String ocid, CharacterBasicDto characterBasicDto, Integer popularity, String combat_power) {
		return CharacterBasicInfoResponseDto.builder()
			.ocid(ocid)
			.character_name(characterBasicDto.getCharacter_name())
			.world_name(characterBasicDto.getWorld_name())
			.character_gender(characterBasicDto.getCharacter_gender())
			.character_class(characterBasicDto.getCharacter_class())
			.character_level(characterBasicDto.getCharacter_level())
			.character_exp(characterBasicDto.getCharacter_exp())
			.character_exp_rate(characterBasicDto.getCharacter_exp_rate())
			.character_guild_name(characterBasicDto.getCharacter_guild_name())
			.character_image(characterBasicDto.getCharacter_image())
			.popularity(popularity)
			.combat_power(combat_power)
			.build();
	}
}
