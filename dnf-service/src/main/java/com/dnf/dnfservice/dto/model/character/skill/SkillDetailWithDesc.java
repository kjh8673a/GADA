package com.dnf.dnfservice.dto.model.character.skill;

import java.util.Optional;

import com.dnf.dnfservice.dto.model.skill.SkillDetailInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SkillDetailWithDesc {
	String skillId;
	String name;
	Integer level;
	Integer requiredLevel;
	String costType;
	SkillDetailInfo detail;

	public static SkillDetailWithDesc of(SkillDetail skillDetail, SkillDetailInfo skillDetailInfo) {
		Integer requiredLevel = null;
		if(skillDetailInfo != null) {
			requiredLevel = skillDetailInfo.getRequiredLevel();
		}
		return SkillDetailWithDesc.builder()
			.skillId(skillDetail.getSkillId())
			.name(skillDetail.getName())
			.level(skillDetail.getLevel())
			.requiredLevel(requiredLevel)
			.costType(skillDetail.getCostType())
			.detail(skillDetailInfo)
			.build();
	}
}
