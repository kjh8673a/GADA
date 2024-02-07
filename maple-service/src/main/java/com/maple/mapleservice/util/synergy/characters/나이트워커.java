package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 나이트워커 {
	String character_class = "나이트워커";
	Integer cycle = 3;
	List<String> skill_type = List.of("바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"쉐도우 스티치",
			"응집된 그림자를 폭발시켜 주변 적들을 고정시킨다. 응집 시간에 비례하여 행동 불가 시간이 증가한다. 그림자를 응집시키는 도중 어떠한 공격에도 밀려나지 않는다. 쉐도우 스티치는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 어둠 속성의 공격이다.",
			"MP 66 소비, 최대 5초 동안 키다운하여 주위의 그림자를 응집\n키다운 해제 시 응집된 그림자가 폭발하여 최대 15명의 적을 850% 데미지로 3번 공격, 공격당한 적은 10초 동안 행동 불가, 응집 시간 0.5초마다 행동 불가 시간 1초 증가하여 최대 12초까지 증가\n쉐도우 스티치로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n재사용 대기시간 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFOGKFPBME.png"
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
		.rate_dex(1.0)
		.rate_int(0.0)
		.rate_luk(4.0)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
