package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 섀도어 {
	String character_class = "섀도어";
	Integer cycle = 3;
	List<String> skill_type = List.of("생존", "딜상승");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"연막탄",
			"자신의 주변에 연막탄을 뿌린다. 연막탄 범위 내의 모든 파티원은 지속 시간 동안 데미지를 입지 않으며, 최대 HP의 일정 비율로 피해를 입히는 공격의 경우 피해를 감소시킨다. 또 자신의 연막탄 범위 내에 있으면 어드밴스드 다크 사이트의 확률이 증가한다.\\n추가로 연막탄에 들어온 적은 크리티컬 피해가 증가한다.\\n연막탄을 시전하는 동안에는 적의 어떠한 공격에도 밀려나지 않으며 시전 시 다크 사이트가 해제되지 않는다.",
			"MP 46 소비, 연막탄 내부에서 적이 받는 크리티컬 데미지 20%만큼 증가, 받는 최대 HP의 일정 비율 피해 10% 감소\\n30초 동안 지속, 재사용 대기시간 150초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGJFPBMG.png"
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
		.plus_critical_damage(20)
		.build();

	StatWeightForCalculate statWeightForCalculate = StatWeightForCalculate.builder()
		.rate_str(1.0)
		.rate_dex(1.0)
		.rate_int(0.0)
		.rate_luk(4.0)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
