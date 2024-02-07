package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 카이저 {
	String character_class = "카이저";
	Integer cycle = 2;
	List<String> skill_type = List.of("슬로우");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"기가 슬래셔",
			"빠르게 검을 휘둘러 검기를 방출하여 적을 공격한다. 보스를 포함한 모든 적은 기가슬래셔에 맞을 때 슬로우 상태가 된다.\n커맨드 스킬 : 공격 도중 + 기가 슬래셔\n5차 스킬 \"드라코 슬래셔\"를 익히기 위해 30레벨 이상 필요",
			"MP 50 소비, 1명의 적을 360% 데미지로 9번 공격\r\n파이널 피규레이션 : MP 60 소비, 3명의 적을 360% 데미지로 11번 공격",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFJDKFPAMA.png"
		),
		new SynergySkill(
			"기가 슬래셔-퍼시스트",
			"기가 슬래셔와 드라코 슬래셔의 슬로우 지속 시간을 증가시킨다.",
			"지속시간 5초 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFJDKFOBIE.png"
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
