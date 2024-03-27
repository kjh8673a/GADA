package com.dnf.dnfservice.dto.model.character;

import java.util.Optional;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterViewRanking {
	int rank;
	String characterName;
	String serverName;
	Integer level;
	String jobName;
	String jobGrowName;
	String characterImage;
	Long fame;

	public static CharacterViewRanking of(int rank, String serverName, CharacterSearchInfo info) {
		return CharacterViewRanking.builder()
			.rank(rank)
			.characterName(info.getCharacterName())
			.serverName(serverName)
			.level(info.getLevel())
			.jobName(info.getJobName())
			.jobGrowName(info.getJobGrowName())
			.characterImage(
				"https://img-api.neople.co.kr/df/servers/" + info.getServerId() + "/characters/"
					+ info.getCharacterId() + "?zoom=1")
			.fame(Long.valueOf(Optional.ofNullable(info.getFame()).orElseGet(() -> 0L)))
			.build();
	}
}
