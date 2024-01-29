package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.util.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 듀얼블레이더 {
	String character_class = "듀얼블레이더";
	Integer cycle = 3;
	List<String> skill_type = List.of("어그로");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"더미 이펙트",
			"미러 이미징으로 소환된 자신의 그림자를 분리시킨다. 분신은 적들의 공격을 집중시켜 나를 적의 공격으로부터 지켜주는 역할을 하며, 공격받는 순간 섀도우 이베이젼이 발동한다. 미러 이미징 스킬 사용 중에만 쓸 수 있다. 또한 영구적으로 듀얼블레이더의 방어력과 회피 확률을 증가시킨다.\\n필요 스킬 : 미러 이미징 20레벨 이상",
			"액티브 효과 : MP 135 소비, 90초 동안 HP 19000인 그림자 소환, 그림자가 소환되어 있을 때 피격 데미지 20% 감소, 그림자가 피해를 받으면 섀도우 이베이젼 발동\\n그림자는 일부 공격에 피해를 받지 않음\\n[패시브 효과 : 25% 확률로 적의 공격을 회피, 방어력 60% 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPGIDPBMG.png"
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
		.plus_attack_power(0)
		.plus_magic_power(0)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(20)
		.plus_damage(20)
		.plus_final_damage(0)
		.plus_critical_damage(0)
		.build();
}
