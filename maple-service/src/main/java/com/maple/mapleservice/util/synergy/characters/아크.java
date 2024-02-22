package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 아크 {
	String character_class = "아크";
	Integer cycle = 2;
	List<String> skill_type = List.of("바인드", "딜상승");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"차지 스펠 앰플리피케이션",
			"차지 스펠을 증폭시켜 차지 스펠 버프의 효과가 파티원에게 적용되고 자신에게는 효과가 2배가 된다. 차지 스펠 앰플리피케이션 사용 시점에 자신에게 적용되어 있는 차지 스펠 버프에도 즉시 효과가 적용된다.",
			"MP 500 소비, 60초 동안 지속\n차지 스펠 버프가 발동될 때 일정 범위 안의 파티원에게 적용, 차지 스펠의 지속시간은 차지 스펠 앰플리피케이션의 남은 지속시간과 같음\n자신에게는 차지 스펠 앰플리피케이션의 지속시간 동안 효과 2배로 적용\n재사용 대기시간 120초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEKHKFPBID.png"
		),
		new SynergySkill(
			"황홀한 구속",
			"전방으로 돌진한 후 심연의 감옥을 구현하여 적을 행동 불가 상태로 만들며 구속한다. 스킬 사용 시 스펙터 잠식 상태가 되고 정신력 고갈 상태에서는 사용할 수 없으며 재사용 대기시간 초기화의 효과를 받지 않는다.\n황홀한 구속은 범위 내의 적 중 최대 HP가 가장 높은 적을 우선으로 공격하고 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 다가오는 죽음이 발생하지 않는다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 황홀한 구속 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.\n시전 중 몬스터에게 부딪히지 않는 상태가 된다.",
			"HP 1100 소비, 600%의 데미지로 1명의 적을 6번 공격, 대상은 10초 동안 행동 불가 상태, 해당 공격으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n이후 9초 동안 일정 간격으로 최대 12명의 적에게 400%의 데미지로 3번 공격\n스킬 종료 시 1000%의 데미지로 최대 12명의 적을 8번 추가 공격\n재사용 대기시간 120초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEKHKFPCMG.png"
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
		.plus_attack_power(30)
		.plus_magic_power(0)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(20)
		.plus_damage(20)
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
