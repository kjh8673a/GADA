package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 다크나이트 {
	String character_class = "다크나이트";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승", "버프 해제");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"비홀더스 버프",
			"자신과 파티원에게 비홀더가 일정 시간마다 버프를 사용한다.",
			"4초 마다 지속시간이 100초인 공격력과 마력 40, 방어력 500, 크리티컬 확률 10% 증가 버프 시전\n파티원에게는 절반만 적용",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDIGOBNG.png"
		),
		new SynergySkill(
			"매직 크래쉬",
			"일정 확률로 주변 적들에게 적용된 일부 버프를 해제하며, 지정된 시간 동안 버프 효과가 적용될 수 없도록 제한한다.\\n공격을 받은 적은 90초 동안 매직 크래쉬 상태 이상에 저항한다. 해제되는 버프는 공격력/마력 증가, 방어력 증가, 하드 스킨이다.",
			"MP 15 소비, 100% 확률로 일부 버프 해제, 22초 동안 버프 효과 제한\\n재사용 대기시간 60초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDIFPBNE.png"
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
		.plus_attack_power(20)
		.plus_magic_power(20)
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
