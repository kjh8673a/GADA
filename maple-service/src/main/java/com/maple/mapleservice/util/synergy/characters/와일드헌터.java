package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 와일드헌터 {
	String character_class = "와일드헌터";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승", "바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"하울링",
			"재규어가 크게 울부 짖어 자신과 파티원들의 전투력을 일시적으로 강화한다.",
			"MP 40 소비, 300초 동안 모든 파티원의 공격력과 마력 10% 증가\n[패시브 효과 : 피격 데미지 15% 감소, 추가 회피 확률 15% 증가, 최대 MP 15% 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMBKHPBMF.png"
		),
		new SynergySkill(
			"샤프 아이즈",
			"일정 시간 동안 파티원 전원에게 적의 약점을 찾아 치명상을 입힐 수 있는 능력을 부여한다.",
			"MP 45 소비, 300초 동안 크리티컬 확률 20%, 크리티컬 데미지 15% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMBKFPBME.png"
		),
		new SynergySkill(
			"재규어 소울",
			"[재규어 스킬] 재규어의 영혼을 담은 울부짖음이 적의 모든 버프를 해제하고 행동 불가 상태로 만든다. 재규어 소울은 범위 내의 적 중 최대 HP가 가장 높은 적을 우선으로 공격하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 재규어 소울 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"MP 300 소비, 1명의 적을 180% 데미지로 12번 공격, 대상은 100% 확률로 10초 동안 행동 불가 상태, 재규어 소울로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n100% 확률로 어나더 바이트 디버프 발생\n재사용 대기시간 120초\n[패시브 효과 : 서먼 재규어, 클로우 컷, 크로스 로드, 소닉붐의 데미지 50%p, 어나더 바이트의 데미지 20%p 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMBKFPBNH.png"
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
		.multiply_attack_power(1.1)
		.multiply_magic_power(1.1)
		.plus_boss_damage(0)
		.plus_damage(0)
		.plus_final_damage(0)
		.plus_critical_damage(15)
		.build();

	StatWeightForCalculate statWeightForCalculate = StatWeightForCalculate.builder()
		.rate_str(1.0)
		.rate_dex(4.0)
		.rate_int(4.0)
		.rate_luk(0.0)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
