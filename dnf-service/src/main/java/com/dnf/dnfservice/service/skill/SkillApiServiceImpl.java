package com.dnf.dnfservice.service.skill;

import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.skill.SkillDetailInfoDto;
import com.dnf.dnfservice.feign.SkillFeignClient;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SkillApiServiceImpl implements SkillApiService {
	private final SkillFeignClient skillFeignClient;

	@Override
	public SkillDetailInfoDto getSkillDetail(String jobId, String skillId) {
		return skillFeignClient.getSkillDetail(jobId, skillId);
	}
}
