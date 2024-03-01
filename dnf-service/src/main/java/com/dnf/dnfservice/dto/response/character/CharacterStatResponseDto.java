package com.dnf.dnfservice.dto.response.character;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.dnf.dnfservice.dto.model.character.CharacterStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterStatResponseDto {
	List<CharacterBuffResponseDto> buff;
	Map<String, Double> status;

	public static CharacterStatResponseDto of(List<CharacterBuffResponseDto> buff, List<CharacterStatus> statusList) {
		Map<String, Double> status = new LinkedHashMap<>();
		statusList.stream().forEach(data -> status.put(data.getName(), data.getValue()));

		return CharacterStatResponseDto.builder()
			.buff(buff)
			.status(status)
			.build();
	}
}
