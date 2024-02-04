package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 아크메이지_불_독 {
	String character_class = "아크메이지(불,독)";
	Integer cycle = 0;
	List<String> skill_type = List.of("딜상승");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"메디테이션",
			"잠시 동안의 명상을 통해 내면의 집중력을 활성화시켜 모든 파티원의 마력을 일시적으로 증가시킨다.\\n필요 스킬 : MP 이터 3레벨 이상",
			"MP 16 소비, 240초 동안 파티원의 마력 30 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAJHPBMB.png"
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
		.plus_magic_power(30)
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
