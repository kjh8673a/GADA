package com.dnf.dnfservice.dto.feign.skill;

import java.util.List;

import com.dnf.dnfservice.dto.model.skill.SkillJobGrow;

import lombok.Getter;

@Getter
public class SkillDetailInfoDto {
	String name;
	String type;
	String costType;
	String desc;
	String descDetail;
	String consumeItem;
	String descSpecial;
	Integer maxLevel;
	Integer requiredLevel;
	String jobName;
	List<SkillJobGrow> jobGrowLevel;
}
