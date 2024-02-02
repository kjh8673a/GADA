package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 엔젤릭버스터 {
	String character_class = "엔젤릭버스터";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"피니투라 페투치아",
			"사랑과 정의의 힘이 담긴 리본을 휘둘러 적을 공격한다. 리본에 적중한 적은 무력화된다.\\n하이퍼 스킬 \\\"피니투라 페투치아-리듀스 아머\\\"를 익히기 위해 1레벨 이상 필요",
			"MP 80 소비, 최대 10명의 적을 400%의 데미지로 10번 공격\\n적중한 적은 60초 동안 1초당 30%의 도트 데미지가 적용되며 엔젤릭버스터가 아닌 파티원의 데미지 20% 증가\\n재사용 대기시간 40초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFJHKFPBMC.png"
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
		.plus_damage(20)
		.plus_final_damage(0)
		.plus_critical_damage(0)
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
