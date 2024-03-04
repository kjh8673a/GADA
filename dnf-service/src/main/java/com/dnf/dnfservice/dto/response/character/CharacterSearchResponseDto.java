package com.dnf.dnfservice.dto.response.character;

import com.dnf.dnfservice.dto.model.character.CharacterSearchInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterSearchResponseDto {
	String serverName;
	String characterName;
	Integer level;
	String jobName;
	String jobGrowName;
	Long fame;
	String characterImage;

	public static CharacterSearchResponseDto of(CharacterSearchInfo characterSearchInfo, String serverName) {
		return CharacterSearchResponseDto.builder()
			.serverName(serverName)
			.characterName(characterSearchInfo.getCharacterName())
			.level(characterSearchInfo.getLevel())
			.jobName(characterSearchInfo.getJobName())
			.jobGrowName(characterSearchInfo.getJobGrowName())
			.fame(characterSearchInfo.getFame())
			.characterImage("https://img-api.neople.co.kr/df/servers/" + characterSearchInfo.getServerId() + "/characters/" + characterSearchInfo.getCharacterId() + "?zoom=1")
			.build();
	}

}
