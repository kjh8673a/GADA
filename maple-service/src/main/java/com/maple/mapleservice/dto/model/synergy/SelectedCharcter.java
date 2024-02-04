package com.maple.mapleservice.dto.model.synergy;

import java.util.List;

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
public class SelectedCharcter {
	String character_class;
	Integer cycle;
	List<String> skill_type;
	List<SynergySkill> skill_desc;

	public static SelectedCharcter of(SynergyCharacter synergyCharacter) {
		return SelectedCharcter.builder()
			.character_class(synergyCharacter.getCharacter_class())
			.cycle(synergyCharacter.getCycle())
			.skill_type(synergyCharacter.getSkill_type())
			.skill_desc(synergyCharacter.getSkill_desc())
			.build();
	}
}
