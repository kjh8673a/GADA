package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 에반 {
	String character_class = "에반";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승", "공격 속도");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"스위프트-돌아와!",
			"[융합 스킬] 미르가 즉시 공격을 중단하고 에반의 곁으로 복귀한다. 문장의 힘으로 주변의 적에게 저주를 건다. 저주에 걸린 적은 일정 시간 동안 더 많은 피해를 받는다. \n스위프트-돌아와! 는 드래곤 스위프트의 스킬 레벨에 따라 함께 성장한다. \n 미르가 드래곤 스위프트, 스위프트 오브 윈드, 스위프트 오브 썬더를 시전 중, 에반이 [돌아와]를 사용하면 발동된다.",
			"범위내 최대 8명의 적에게 60초 동안 10% 만큼 받는 공격 마법 스킬의 최종 데미지를 증폭시키는 저주 시전",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNAKGOBND.png"
		),
		new SynergySkill(
			"다이브-돌아와!",
			"[융합 스킬] 미르가 즉시 공격을 중단하고 에반의 곁으로 복귀하며 문장의 힘으로 자신을 포함한 주변 파티원의 공격 속도를 1단계 증가 시킨다.  다이브-돌아와! 는 드래곤 다이브의 스킬 레벨에 따라 함께 성장한다.  미르가 드래곤 다이브, 다이브 오브 썬더, 다이브 오브 어스를 시전 중, 에반이 [돌아와]를 사용하면 발동된다.",
			"60초 동안 자신을 포함한 주변 파티원 공격 속도 1단계 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNAKDOBND.png"
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
		.rate_str(0.0)
		.rate_dex(0.0)
		.rate_int(4.0)
		.rate_luk(1.0)
		.rate_hp(0.0)
		.rate_attack_power(0.0)
		.rate_magic_power(1.0)
		.build();
}
