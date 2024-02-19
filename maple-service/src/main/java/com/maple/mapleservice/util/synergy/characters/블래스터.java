package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 블래스터 {
	String character_class = "블래스터";
	Integer cycle = 2;
	List<String> skill_type = List.of("바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"리볼빙 벙커",
			"불릿을 순간적으로 최대치로 리로드한 뒤, 전방의 적에게 빠르게 접근하여 적을 행동 불가 상태로 만들어 움켜쥔다. 범위 내의 적 중 최대 HP가 가장 높은 적을 우선으로 공격한다. 적을 움켜쥔 채로 리볼빙 캐논 사용을 가능하며, 리볼빙 캐논으로 6회 타격한 후 다시 입력하면 전방 일직선상에 파일 벙커를 사용해 추가 피해를 입힌다. 행동 불가 상태로 만들지 못하는 적을 공격해도 스킬이 발동되며 적을 움켜쥔 상태는 무적이다. 파일 벙커를 이용한 마지막 공격은 몬스터의 방어율을 추가로 무시한다. 근처에 적이 없으면 발동되지 않는다. 스킬을 재사용하면 움켜쥔 것을 풀 수 있다. 풀어도 행동 불가 상태는 유지된다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 리볼빙 벙커 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.\n필요 스킬 : 릴리즈 파일 벙커 10레벨 이상",
			"MP 200 소비, 적을 230% 데미지로 2번 공격하며 행동 불가 상태로 만듦, 이후 사용하는 리볼빙 캐논은 최대 10명의 적을 각각 200%, 220%, 240%, 260%, 280%, 300%로 4번씩 공격\n파일 벙커를 이용한 마지막 공격은 350%의 데미지로 8번 공격하며 몬스터 방어율 80% 추가 무시\n재사용 대기시간 120초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMFKFPBME.png"
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
		.rate_str(4.0)
		.rate_dex(1.0)
		.rate_int(0.0)
		.rate_luk(0.0)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
