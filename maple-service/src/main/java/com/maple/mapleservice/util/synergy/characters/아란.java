package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 아란 {
	String character_class = "아란";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승", "힐");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"블레싱 마하",
			"폴암의 정령 마하의 가호로 파티원들의 공격력을 증가시킨다.",
			"MP 13 소비, 200초 동안 파티원의 공격력 30, 마력30 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNDKGPBNC.png"
		),
		new SynergySkill(
			"마하의 영역",
			"리엔에 잠들어 있는 거대 폴암 마하를 소환한다. 소환한 마하는 지상에 떨어지며 넓은 영역에 피해를 준다. 소환되어 있는 시간 동안 근처 적에게 지속적으로 피해를 입히고, 주변 파티원의 상태 이상을 해제하며 HP, MP를 회복시켜준다. 마하의 영역은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.",
			"MP 500 소비, 시전 후 2초 동안 무적, 최대 15명의 적을 800% 데미지로 5번 공격. 이후 8초 동안 범위 내의 적을 500% 데미지로 3번 공격, 1초 마다 파티원의 일부 상태 이상 해제 및 HP/MP를 20% 회복\\n재사용 대기시간 90초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNDKFPBJH.png"
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
		.plus_attack_power(30)
		.plus_magic_power(30)
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
