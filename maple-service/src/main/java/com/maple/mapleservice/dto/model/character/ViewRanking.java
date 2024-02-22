package com.maple.mapleservice.dto.model.character;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;

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
public class ViewRanking {
	int rank;
	String character_name;
	String world_name;
	String character_class;
	Integer character_level;
	String guild_name;
	String character_image;

	public static ViewRanking of(int rank, CharacterBasicDto characterBasicDto) {
		return ViewRanking.builder()
			.rank(rank)
			.character_name(characterBasicDto.getCharacter_name())
			.world_name(characterBasicDto.getWorld_name())
			.character_class(characterBasicDto.getCharacter_class())
			.character_level(characterBasicDto.getCharacter_level())
			.guild_name(characterBasicDto.getCharacter_guild_name())
			.character_image(characterBasicDto.getCharacter_image())
			.build();
	}
}
