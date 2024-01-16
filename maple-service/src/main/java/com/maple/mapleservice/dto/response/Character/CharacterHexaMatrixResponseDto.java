package com.maple.mapleservice.dto.response.Character;

import java.util.List;

import com.maple.mapleservice.dto.model.character.skill.HexaMatrix;
import com.maple.mapleservice.dto.model.character.skill.SkillDesc;

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
public class CharacterHexaMatrixResponseDto {
	List<HexaMatrix> character_hexa_core_equipment;
	List<SkillDesc> character_skill_desc;
	Long used_sol_erda_energy;
	Long used_sol_erda_fragment;

	public static CharacterHexaMatrixResponseDto of(List<HexaMatrix> character_hexa_core_equipment, Long used_sol_erda_energy, Long used_sol_erda_fragment, List<SkillDesc> character_skill_desc) {
		return CharacterHexaMatrixResponseDto.builder()
			.character_hexa_core_equipment(character_hexa_core_equipment)
			.used_sol_erda_energy(used_sol_erda_energy)
			.used_sol_erda_fragment(used_sol_erda_fragment)
			.character_skill_desc(character_skill_desc)
			.build();
	}
}
