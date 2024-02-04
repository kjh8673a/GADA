package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 루미너스 {
	String character_class = "루미너스";
	Integer cycle = 3;
	List<String> skill_type = List.of("힐", "딜상승", "바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"샤인 리뎀션",
			"빛의 힘으로 파티원을 치유하고, 적들에게 피해를 입힌다.",
			"MP 41 소비, 범위 내 6명의 적에게 180% 데미지로 3번 공격, 회복력 800%\\n재사용 대기시간 5초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNFKGPAMB.png"
		),
		new SynergySkill(
			"포틱 메디테이션",
			"자신을 포함한 주변 파티원의 마력을 일정 시간 동안 증가시킨다. 오닉스의 축복과 중첩되지 않는다.",
			"MP 55 소비, 180초 동안 자신을 포함한 파티원의 마력 40 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNFKGPBMG.png"
		),
		new SynergySkill(
			"아마겟돈",
			"검은 마법사의 힘을 이용해서 모든 적들을 행동 불가 상태에 빠뜨리며 데미지를 입힌다.\\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 아마겟돈 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"MP 1000 소비, 최대 15명의 적을 1000% 데미지로 3번 공격하고 10초 동안 행동 불가 상태 적용, 시전 동작 중 무적\\n아마겟돈으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\\n재사용 대기시간 120초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNFKFPBJC.png"
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
		.multiply_ap_str(1.0)
		.multiply_ap_dex(1.0)
		.multiply_ap_int(1.0)
		.multiply_ap_luk(1.0)
		.multiply_ap_hp(1.0)
		.plus_attack_power(0)
		.plus_magic_power(40)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(0)
		.plus_damage(0)
		.plus_final_damage(0)
		.plus_critical_damage(0)
		.build();

	StatWeightForCalculate statWeightForCalculate = StatWeightForCalculate.builder()
		.rate_str(0.0)
		.rate_dex(0.0)
		.rate_int(4.0)
		.rate_luk(1.0)
		.rate_hp(0.0)
		.rate_attack_power(0.0)
		.rate_magic_power(1.0)
		.build();
}
