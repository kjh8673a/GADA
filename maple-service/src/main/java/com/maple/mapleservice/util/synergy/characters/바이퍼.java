package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 바이퍼 {
	String character_class = "바이퍼";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승", "쿨타임 초기화", "공격 속도");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"타임 리프",
			"자신을 포함한 파티 전원이 사용하는 스킬의 재사용 대기시간을 초기화한다.\\n재사용 대기시간 초기화의 효과를 받지 않는 스킬에는 효과가 없다.\\n타임 리프는 재사용 대기시간 초기화의 효과를 받지 않고 효과를 받은 파티원은 일정 시간 동안 타임 리프의 효과를 다시 받을 수 없다.",
			"MP 405 소비, 재사용 대기시간 180초\\n효과를 받은 파티원은 180초 동안 타임 리프의 효과를 다시 받을 수 없음.",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHKFPBNA.png"
		),
		new SynergySkill(
			"윈드 부스터",
			"HP, MP를 소비하여 일정 시간 동안 팀원 전원의 공격 속도를 2단계 증가시킨다. 기존 액셀레이션과 중복해서 사용할 수 있다.\\n필요 스킬 : 너클 액셀레이션 10레벨 이상",
			"HP 40, MP 40 소비, 180초 동안 공격 속도 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHKFPBMJ.png"
		),
		new SynergySkill(
			"파이렛 플래그",
			"용감한 해적의 깃발을 꽂아 자신을 비롯한 파티원의 사기를 높이고 적을 두렵게 한다. 깃발을 꼽는 도중에는 적의 어떠한 공격에도 밀려나지 않는다.",
			"MP 500 소비, 30초 동안 해적 깃발 소환\\n해적 깃발 주변에 있는 파티원의 AP를 직접 투자한 모든 능력치 25% 증가, 몬스터 방어율 25% 감소\\n재사용 대기시간 30초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLHPBNH.png"
		)
	);

	IncreaseVolume increaseVolume = IncreaseVolume.builder()
		.plus_str(0)
		.plus_dex(0)
		.plus_int(0)
		.plus_luk(0)
		.plus_hp(0)
		.multiply_str(1.0)
		.multiply_dex(1.0)
		.multiply_int(1.0)
		.multiply_luk(1.0)
		.multiply_hp(1.0)
		.multiply_ap_str(1.25)
		.multiply_ap_dex(1.25)
		.multiply_ap_int(1.25)
		.multiply_ap_luk(1.25)
		.multiply_ap_hp(1.25)
		.plus_attack_power(0)
		.plus_magic_power(0)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(0)
		.plus_damage(0)
		.plus_final_damage(0)
		.plus_critical_damage(0)
		.build();

	StatWeightForCalculate statWeightForCalculate = StatWeightForCalculate.builder()
		.rate_str(4.0)
		.rate_dex(1.0)
		.rate_int(0.0)
		.rate_luk(0.0)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
