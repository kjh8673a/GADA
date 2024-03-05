package com.dnf.dnfservice.service.skill;

import com.dnf.dnfservice.dto.feign.skill.SkillDetailInfoDto;

public interface SkillApiService {
	SkillDetailInfoDto getSkillDetail(String jobId, String skillId);
}
