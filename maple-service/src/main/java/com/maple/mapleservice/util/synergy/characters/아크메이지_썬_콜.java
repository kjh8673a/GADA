package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 아크메이지_썬_콜 {
	String character_class = "아크메이지(썬,콜)";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승", "바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"메디테이션",
			"잠시 동안의 명상을 통해 내면의 집중력을 활성화시켜 모든 파티원의 마력을 일시적으로 증가시킨다.\\n필요 스킬 : MP 이터 3레벨 이상",
			"MP 16 소비, 240초 동안 파티원의 마력 30 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAJHPBMB.png"
		),
		new SynergySkill(
			"프리징 브레스",
			"강력한 냉기로 적들과 자신을 얼려 행동 불가 상태로 만들며 지속적으로 적의 방어율을 감소시킨다.\\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 프리징 브레스 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다. 얼음 속성의 공격이다.",
			"MP 22 소비, 자신은 무적이 되며 최대 8명의 적을 80%의 데미지로 4번 공격 후 13초 동안 행동 불가 상태로 만들고 마법 방어율 30%, 물리 방어율 15% 감소 시킴\\n프리징 브레스로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\\n적이 행동 불가 상태에 걸리지 않으면 데미지를 받지 않음\\n키다운 지속 시 최대 13초 동안 유지. 재사용 대기시간 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAJFPBNB.png"
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
		.plus_magic_power(30)
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
