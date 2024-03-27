package com.dnf.dnfservice.dto.model.character.talisman;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterTalismanForResponse {
	TalismanInfoWithImageAndDetail talisman;
	List<TalismanRuneWithImageAndDetail> runes;

	public static CharacterTalismanForResponse of(TalismanInfoWithImageAndDetail talisman, List<TalismanRuneWithImageAndDetail> runes) {
		return CharacterTalismanForResponse.builder()
			.talisman(talisman)
			.runes(runes)
			.build();
	}
}
