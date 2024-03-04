package com.dnf.dnfservice.dto.response.character;

import java.util.LinkedHashMap;
import java.util.Map;

import com.dnf.dnfservice.dto.model.character.CharacterBuff;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterBuffResponseDto {
	String name;
	Integer level;
	Map<String, Double> status;

	public static CharacterBuffResponseDto of(CharacterBuff characterBuff) {
		Map<String, Double> status = new LinkedHashMap<>();
		characterBuff.getStatus().stream().forEach(data -> status.put(data.getName(), data.getValue()));

		return CharacterBuffResponseDto.builder()
			.name(characterBuff.getName())
			.level(characterBuff.getLevel())
			.status(status)
			.build();
	}

}
