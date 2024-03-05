package com.dnf.dnfservice.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dnf.dnfservice.dto.feign.skill.SkillDetailInfoDto;
import com.dnf.dnfservice.service.skill.SkillApiService;

@SpringBootTest
public class SkillApiServiceTest {
	@Autowired
	SkillApiService skillApiService;

	@Test
	void 스킬상세조회() {
		SkillDetailInfoDto skillDetailInfoDto = skillApiService.getSkillDetail("3909d0b188e9c95311399f776e331da5", "45442bbbe33540b4deeec29437dae70c");
	}
}
