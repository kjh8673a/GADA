package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 데몬_어벤져 {
	String character_class = "데몬 어벤져";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승", "바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"아머 브레이크",
			"전방의 적들을 공격하여 갑옷을 찢는다. 공격 당한 적들은 일정 시간 방어율이 감소하는 디버프에 걸린다.",
			"HP 1000 소비, 최대 12명의 적을 350%의 데미지로 4번 공격. 공격 당한 적의 방어율이 60초 동안 30% 감소\\n[패시브 효과 : 익시드: 데몬 스트라이크의 스킬 데미지 155%p 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDJFPBMC.png"
		),
		new SynergySkill(
			"블러디 임프리즌",
			"전후방의 적들을 구속하는 공격을 한다. 공격당한 적들은 일정 시간 행동 불가 상태에 빠진다.\\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 블러디 임프리즌 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"HP 5000 소비, 최대 14명의 적을 800% 데미지로 3번 공격. 공격 당한 적은 10초 동안 행동 불가\\n블러디 임프리즌으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\\n재사용 대기시간 120초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDJFPBMD.png"
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
		.plus_boss_damage(0)
		.plus_damage(0)
		.plus_final_damage(0)
		.plus_critical_damage(0)
		.build();

	StatWeightForCalculate statWeightForCalculate = StatWeightForCalculate.builder()
		.rate_str(1.0)
		.rate_dex(0.0)
		.rate_int(0.0)
		.rate_luk(0.0)
		.rate_hp(1 / 3.5)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
