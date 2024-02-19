package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 윈드브레이커 {
	String character_class = "윈드브레이커";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승", "어그로");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"샤프 아이즈",
			"일정 시간 동안 파티원 전원에게 적의 약점을 찾아 치명상을 입힐 수 있는 능력을 부여한다.",
			"MP 45 소비, 300초 동안 크리티컬 확률 20%, 크리티컬 데미지 15% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMBKFPBME.png"
		),
		new SynergySkill(
			"에메랄드 더스트",
			"에메랄드 플라워를 강화하여 보다 효율적인 전투를 감행한다.\n필요 스킬 : 에메랄드 플라워 10레벨 이상",
			"수정 꽃의 최대 HP 40000로 증가, 주변 몬스터 방어율 10% 감소 및 피격 데미지 20% 감소",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFOBKFOBMH.png"
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
		.plus_critical_damage(15)
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
