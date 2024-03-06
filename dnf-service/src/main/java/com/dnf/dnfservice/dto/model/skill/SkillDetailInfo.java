package com.dnf.dnfservice.dto.model.skill;

import com.dnf.dnfservice.dto.feign.skill.SkillDetailInfoDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SkillDetailInfo {
	String desc;
	String descDetail;
	String consumeItem;
	String descSpecial;
	Integer maxLevel;
	Integer requiredLevel;
	Integer masterLevel;

	public static SkillDetailInfo of(SkillDetailInfoDto skillDetailInfoDto) {
		if(skillDetailInfoDto == null) {
			return null;
		}

		String jobName = skillDetailInfoDto.getJobName();
		int masterLevel = 0;
		for(SkillJobGrow skillJobGrow : skillDetailInfoDto.getJobGrowLevel()) {
			masterLevel = skillJobGrow.getMasterLevel();
			if(skillJobGrow.getJobGrowName().equals(jobName)) {
				break;
			}
		}
		return SkillDetailInfo.builder()
			.desc(skillDetailInfoDto.getDesc())
			.descDetail(skillDetailInfoDto.getDescDetail())
			.consumeItem(skillDetailInfoDto.getConsumeItem())
			.descSpecial(skillDetailInfoDto.getDescSpecial())
			.maxLevel(skillDetailInfoDto.getMaxLevel())
			.requiredLevel(skillDetailInfoDto.getRequiredLevel())
			.masterLevel(masterLevel)
			.build();
	}

}
