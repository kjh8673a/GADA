package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 카데나 {
	String character_class = "카데나";
	Integer cycle = 3;
	List<String> skill_type = List.of("바인드", "딜상승");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"서먼 슬래싱 나이프",
			"2개의 단도를 소환하여 전후방을 순식간에 베어낸다. 공중에서 사용 시 베어내는 시간 동안 공중에 머문다. 단도에 닿은 적은 일정 시간 동안 공포 상태 이상에 걸린다.\n필요 스킬 : 웨폰 버라이어티 Ⅱ 1레벨 이상",
			"MP 35 소비, 315%의 데미지로 최대 4명의 적을 8번 공격, 공격 시 100% 확률로 30초 동안 공포에 빠지게 하여 적의 방어율 30% 감소\n재사용 대기시간 : 10초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFJGKGPBMD.png"
		),
		new SynergySkill(
			"체인아츠:테이크다운",
			"체인을 순식간에 길게 뽑아 휘둘러 범위 내의 적을 체인으로 결박한다. 체인아츠:테이크다운은 최대 HP가 높은 적을 우선 결박한다.\n결박 후 일정 시간이 지나면 잔상이 남을 정도로 빠르게 적을 난타한다. 난타의 위력은 해당 시간 동안 발동된 웨폰 버라이어티 추가타의 횟수에 따라 달라지고, 난타 중에는 웨폰 버라이어티 중첩이 최대치로 유지된다.\n재사용 대기시간 초기화의 효과를 받지 않고 공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 체인아츠:테이크다운 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"MP 252 소비, 최대 8명의 적을 303%의 데미지로 2번 공격하며 10초 동안 행동 불가 상태로 만듦, 해당 공격으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n시전 후 5초 동안 웨폰 버라이어티 추가타 발동 횟수에 따라 공격 강도가 3단계로 나뉘는 난타 발생, 발동 횟수를 시간 내에 충족하지 않으면 최소 단계의 난타 발생\n난타 : 웨폰 버라이어티 발동 횟수가 0, 3, 5회 이상일 때 단계에 따라 묶은 위치에서 780%/893%/1005%의 데미지로 15번 공격 후 최대 10명의 적을 250%/350%/500%의 데미지로 10번 공격하는 마무리 발동\n연속 공격 중 타격에 따라 최대 10명의 적을 605%의 데미지로 4번 공격하는 충격파 발생, 모든 공격은 방어율 80% 추가 무시\n재사용 대기시간 : 118초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFJGKFPBMB.png"
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
		.rate_str(1.0)
		.rate_dex(1.0)
		.rate_int(0.0)
		.rate_luk(4.0)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
