package com.dnf.dnfservice.dto.response.character;

import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.model.character.CharacterSearchInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterBasicInfoResponseDto {
	String serverName;
	String characterName;
	Integer level;
	String jobName;
	String jobGrowName;
	String jobImage;
	Long fame;
	String characterImage;
	String adventureName;
	Long jobRanking;
	String guildName;

	public static CharacterBasicInfoResponseDto of(CharacterSearchInfo characterSearchInfo, String serverName,
		CharacterBasicInfoDto characterBasicInfoDto, Long jobRanking, String jobImage) {
		return CharacterBasicInfoResponseDto.builder()
			.serverName(serverName)
			.characterName(characterSearchInfo.getCharacterName())
			.level(characterSearchInfo.getLevel())
			.jobName(characterSearchInfo.getJobName())
			.jobGrowName(characterSearchInfo.getJobGrowName())
			.jobImage(jobImage)
			.fame(characterSearchInfo.getFame())
			.characterImage(
				"https://img-api.neople.co.kr/df/servers/" + characterSearchInfo.getServerId() + "/characters/"
					+ characterSearchInfo.getCharacterId() + "?zoom=1")
			.adventureName(characterBasicInfoDto.getAdventureName())
			.jobRanking(jobRanking)
			.guildName(characterBasicInfoDto.getGuildName())
			.build();
	}

}
