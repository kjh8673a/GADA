
package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 팬텀 {
	String character_class = "팬텀";
	Integer cycle = 3;
	List<String> skill_type = List.of("버프 해제", "딜상승", "힐");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"조커",
			"수많은 카드를 던진 후 마지막 카드 1장으로 운을 시험한다. 느린 속도로 이동하며 공격할 수 있고 범위 내의 적 중 최대 HP가 가장 높은 보스 몬스터를 우선으로 공격한다. 시전하는 동안에는 기절 상태 이상을 무시한다. 공격이 멈춘 후 카드를 뽑는 동안 무적이다.",
			"MP 1000 소비, 최대 7초 동안 키다운 가능하며 전방으로 일정 시간마다 770%로 1번 공격하는 카드를 다수 던져 공격, 공격 도중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 15% 감소\n공격을 멈춘 후 카드를 뽑아 30초 동안 파티원 전체가 버프를 받음\n프리스트 : 일정 시간마다 최대 HP와 MP의 2% 회복\n생명의 나무 : 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 8% 감소, 상태 이상 내성 25 증가\n모래시계 : 재사용 대기시간 초기화의 영향을 받지 않는 스킬을 제외한 스킬의 재사용 대기시간이 32% 더 빠르게 감소\n날카로운 검 : 최종 데미지 6% 증가\n조커 : 모든 효과를 한 번에 받음\n재사용 대기시간 : 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLDPBMJ.png"
		),
		new SynergySkill(
			"소울 스틸",
			"주변의 몬스터에게 걸린 버프를 훔친다. 훔친 버프의 종류가 다양할 경우 가장 효율이 좋은 버프 1종만 자신에게 적용하며, 버프에 걸린 몬스터가 없을 경우 아무런 효과도 받지 못한다.",
			"MP 60 소비, 최대 12명의 주변 몬스터에게 걸린 버프를 훔쳐서 자신에게 건다. 훔쳐서 적용되는 버프 내용은 아래와 같다. \n공격력: 공격력 40 증가\n피해 무효화: 받는 피해량 40% 감소\n공격반사: 받는 데미지의 600%의 데미지 반사\n물리/마법무효, 하드스킨: 일부 공격을 제외하고는 피해를 입지 않는 일시적 무적\n재사용 대기시간 120초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNGKFPBMH.png"
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
		.plus_final_damage(6)
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
