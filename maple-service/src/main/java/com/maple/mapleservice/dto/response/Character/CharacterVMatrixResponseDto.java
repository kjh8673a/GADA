package com.maple.mapleservice.dto.response.Character;

import java.util.List;

import com.maple.mapleservice.dto.model.character.skill.SkillDesc;
import com.maple.mapleservice.dto.model.character.skill.VMatrix;

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
public class CharacterVMatrixResponseDto {
	List<VMatrix> character_v_core_equipment;
	List<SkillDesc> character_skill_desc;

	public static CharacterVMatrixResponseDto of(List<VMatrix> character_v_core_equipment, List<SkillDesc> character_skill_desc) {
		return CharacterVMatrixResponseDto.builder()
			.character_v_core_equipment(character_v_core_equipment)
			.character_skill_desc(character_skill_desc)
			.build();
	}
}
