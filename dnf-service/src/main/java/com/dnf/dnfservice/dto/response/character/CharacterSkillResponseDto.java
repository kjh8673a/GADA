package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.skill.SkillDetail;
import com.dnf.dnfservice.dto.model.character.skill.SkillDetailWithDesc;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterSkillResponseDto {
	List<SkillDetailWithDesc> active;
	List<SkillDetailWithDesc> passive;

	public static CharacterSkillResponseDto of(List<SkillDetailWithDesc> active, List<SkillDetailWithDesc> passive) {
		return CharacterSkillResponseDto.builder()
			.active(active)
			.passive(passive)
			.build();
	}
}
