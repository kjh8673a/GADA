package com.dnf.dnfservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.dnf.dnfservice.config.FeignConfig;
import com.dnf.dnfservice.dto.feign.skill.SkillDetailInfoDto;

@FeignClient(name = "skill-api", url = "${feign.dnf.url}" + "/skills", configuration = FeignConfig.class)
public interface SkillFeignClient {

	@GetMapping("/{jobId}/{skillId}")
	SkillDetailInfoDto getSkillDetail(@PathVariable String jobId, @PathVariable String skillId);
}
