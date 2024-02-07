
package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 플레임위자드 {
	String character_class = "플레임위자드";
	Integer cycle = 0;
	List<String> skill_type = List.of("딜상승");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"버닝 리젼",
			"화염의 마법진을 지면에 설치하여 자신을 포함한 파티원이 해당 마법진 위에 있을 때 데미지와 공격 속도를 증가 시킨다. 자신은 마법진 밖에 있어도 마법진의 효과를 얻을 수 있다. 해당 효과는 처음 효과를 얻은 버닝 리젼에 의해서는 갱신되지 않는다.",
			"MP 115 소비, 30초 동안 지속되는 마법진 위에 있을 때 데미지 60% 증가, 공격 속도 1단계 증가\n자신은 마법진 밖에 있어도 동일한 효과 획득, 파티원은 마법진 위에서만 효과 적용\n재사용 대기시간 45초, 마법진이 지속 가능한 시간보다 먼저 사라졌을 때 남은 지속 시간 1초 당 재사용 대기시간 1초 감소, 최대 15초 감소 가능",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFOAKFPBMF.png"
		),
		new SynergySkill(
			"스피릿 오브 플레임",
			"엘리멘트를 매개체로 화염의 화신을 소환한다. 스킬을 사용하면 파이어 라이온이 소환되고, 아래 방향키를 누르면서 사용하면 플레임 폭스가 소환된다.\n화신의 가호가 더해져 일정 시간 동안 MP 소비가 증가하는 대신 자신의 모든 공격이 방어를 일정수준 무시한다.\n소환한 화신의 종류에 따라 오비탈 플레임, 인페르노라이즈 사용 시 다른 공격이 발동된다.\n4차 스킬 \"인페르노라이즈\"를 익히기 위해 1레벨 이상 필요",
			"MP 115 소비, 300초 동안 MP 소비량 105%로 증가, 방어율 무시 30% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFOAKFPBME.png"
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
		.plus_damage(60)
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
