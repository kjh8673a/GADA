package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 소울마스터 {
	String character_class = "소울마스터";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승", "바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"트루 사이트",
			"모든 것을 꿰뚫어보는 영혼의 눈으로 상대를 직시한다.",
			"MP 50 소비, 30초 동안 100% 확률로 범위 내 최대 10명의 적의 방어율 10% 감소, 적이 받는 최종 데미지 5% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFODKGPBOD.png"
		),
		new SynergySkill(
			"소울 페네트레이션",
			"영혼의 힘으로 소환한 검들이 떨어지는 별처럼 적들을 꿰뚫어 지면에 고정시킨다. 소울 페네트레이션은 보스에도 동일하게 적용된다.",
			"MP 100 소비, 최대 15명의 적을 500%의 데미지로 3번 공격, 공격당한 적은 100% 확률로 10초 동안 행동 불가\\n소울 페네트레이션으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\\n디버프 해제 시 300%의 데미지로 3번 공격하는 추가 데미지 발생\\n재사용 대기시간 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFODKFPBME.png"
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
		.plus_final_damage(5)
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
