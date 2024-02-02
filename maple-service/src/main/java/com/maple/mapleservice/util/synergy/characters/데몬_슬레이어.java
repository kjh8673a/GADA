package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 데몬_슬레이어 {
	String character_class = "데몬 슬레이어";
	Integer cycle = 2;
	List<String> skill_type = List.of("드롭률", "바인드", "힐");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"데빌 크라이",
			"순간적으로 잠재된 힘을 방출하여 사방의 적 다수를 위협하고 강한 데미지를 준다. 대상은 암흑 상태 이상에 걸려 방어력, 공격력, 명중률이 감소하며 경험치 획득량과 아이템 드롭 확률이 증가한다.\\n인피니티 포스 지속 중에는 재사용 대기시간이 감소한다.",
			"HP 400, 포스 30 소비, 최대 15명의 적을 515% 데미지로 7번 공격하며 위협. 대상은 60초 동안 공격력, 방어력 15%, 명중률 20% 감소, 획득 경험치, 아이템 드롭률 20% 증가\\n재사용 대기시간 14초, 인피니티 포스 지속 중에는 7초로 감소",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDKFPBMD.png"
		),
		new SynergySkill(
			"다크 바인드",
			"일정 확률로 주변의 적 다수를 행동 불가 상태로 만든다. 추가로 몬스터의 방어율을 일정수준만큼 무시하는 패시브 효과가 있으며 다크 바인드의 효과는 보스에게도 동일하게 적용된다. \\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 다크 바인드 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"포스 60 소비, 최대 15명의 적을 700%의 데미지로 3번 공격, 대상은 10초 동안 100%확률로 행동 불가 상태 적용\\n다크 바인드로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\\n재사용 대기시간 120초\\n[패시브 효과 : 영구적으로 몬스터의 방어율 30% 무시]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDKFPBMG.png"
		),
		new SynergySkill(
			"뱀피릭 터치",
			"일정 시간 동안 적들에게 입힌 데미지의 일부를 나와 파티원의 HP로 회복시킨다.",
			"포스 30 소비, 180초 동안 공격 데미지의 3%를 파티원의 HP로 회복시킴. 최대 HP의 25%이상 회복 불가, 한 번 흡수 후 5초 동안 재흡수 불가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMDKFPBMC.png"
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
