package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 신궁 {
	String character_class = "신궁";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승", "어그로");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"샤프 아이즈",
			"일정 시간 동안 파티원 전원에게 적의 약점을 찾아 치명상을 입힐 수 있는 능력을 부여한다.",
			"MP 45 소비, 300초 동안 크리티컬 확률 20%, 크리티컬 데미지 15% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBKFPBMC.png"
		),
		new SynergySkill(
			"애로우 일루전",
			"일정 시간 동안 환상의 화살을 소환해 적들을 유혹하게 하며 데미지를 주고 피해를 입을 시 강하게 반격한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 추가로 영구히 방어율 무시가 증가한다.",
			"MP 70 소비, 30초 동안 HP 100000인 환상 화살 소환\n환상 화살은 일정 시간마다 200%의 데미지로 공격하며 자신 쪽으로 당김, 공격에 적중한 적은 70% 확률로 4초 동안 기절\n환상 화살이 피해를 입을 때 해당 피해량의 1200%로 반사\n[패시브 효과 : 몬스터의 방어율 30% 무시]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBJFPBNE.png"
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
		.plus_magic_power(0)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(0)
		.plus_damage(0)
		.plus_final_damage(0)
		.plus_critical_damage(15)
		.build();

	StatWeightForCalculate statWeightForCalculate = StatWeightForCalculate.builder()
		.rate_str(1.0)
		.rate_dex(4.0)
		.rate_int(0.0)
		.rate_luk(0.0)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
