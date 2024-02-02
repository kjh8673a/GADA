
package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 키네시스 {
	String character_class = "키네시스";
	Integer cycle = 3;
	List<String> skill_type = List.of("바인드", "버프 해제");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"얼티메이트-딥 임팩트",
			"염동력으로 들어올린 거대한 바위를 전방에 초고속으로 충돌시켜 모든 것을 분해한다. 충돌한 적의 모든 버프를 해제하며 버프가 해제된 적은 120초 동안 키네시스의 버프 해제에 대해 내성을 갖는다. 얼티메이트-딥 임팩트는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\\n필요 스킬 : 얼티메이트-메테리얼 10레벨\\n3차 스킬 \\\"얼티메이트-트레인\\\"을 익히기 위해 10레벨 이상 필요",
			"싸이킥 포인트 2칸 소비, 최대 4명의 적을 170%의 데미지로 7번 공격, 피격된 대상에게 적용된 모든 버프 해제\\n[얼티메이트-메테리얼]의 데미지가 130%p만큼 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KELAKHPBMD.png"
		),
		new SynergySkill(
			"싸이코 메트리",
			"적의 기억을 더듬어 거친 충격과 함께 가장 고통스러운 순간 속에 머물게 한다. 일정 시간 적을 행동 불가 상태로 만든다.\\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 싸이코 메트리 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"최대 15명의 적에게 1800%의 데미지로 1번 공격. 공격 당한 적은 10초 간 행동 불가.\\n싸이코 메트리로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\\n재사용 대기시간: 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KELAKFPBPB.png"
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
		.rate_str(0.0)
		.rate_dex(0.0)
		.rate_int(4.0)
		.rate_luk(1.0)
		.rate_hp(0.0)
		.rate_attack_power(0.0)
		.rate_magic_power(1.0)
		.build();
}
