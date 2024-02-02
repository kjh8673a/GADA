
package com.maple.mapleservice.util.synergy.characters;

import java.util.ArrayList;
import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 호영 {
	String character_class = "호영";
	Integer cycle = 3;
	List<String> skill_type = List.of("힐", "딜상승", "바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"권술 : 흡성와류",
			"[두루마리 도술] 두루마리를 펼쳐 적의 정기를 흡수하는 강렬한 소용돌이를 불러낸다. 스킬을 재사용하여 소용돌이를 소멸시킬 수 있고 흡수한 정기의 수에 비례해 파티원의 HP와 MP를 회복시킨다.\\n\\n권술 : 흡성와류는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.",
			"두루마리 도력 900 소비, 40초 동안 256% 데미지로 6번 공격하는 소용돌이 생성\\n공격 적중 횟수 4회당 정기를 1개 흡수할 수 있고 최대 9개까지 흡수 가능, 보스 몬스터를 공격했다면 정기를 3배로 흡수\\n스킬 재사용 시 소용돌이가 소멸하며 정기 1개당 파티원의 최대 HP와 MP의 5% 회복",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEJGKFPBMI.png"
		),
		new SynergySkill(
			"권술 : 미생강변",
			"두루마리에서 신비한 빛이 뻗어나 빛에 닿은 적을 일정 시간 하찮은 미물로 변이시킨다. 적에게 빛이 닿을 때 마다 주위 적에게 반사되어 다수의 적을 변이시키지만 보스 몬스터에게는 변이가 통하지 않는다",
			"두루마리 도력 900 소비, 최대 15명의 적을 450% 데미지로 8번 공격, 보스 몬스터 공격 시 데미지 20% 증가\\n일반 몬스터의 경우 60초 동안 공격하지 않는 몬스터로 변이 및 방어율 20% 감소, 보스 몬스터의 경우 방어율 감소 효과만 적용",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEJGKGPBMI.png"
		),
		new SynergySkill(
			"선기 : 분신 둔갑 태을선인",
			"사부님에게 귀에 못이 박히게 들었던 지겨운 잔소리를 재현한다. 사부님의 잔소리는 주위의 적을 행동 불가 상태로 만든다.\\n\\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 선기 : 분신둔갑 태을선인 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"MP 200 소비, 최대 8명의 적을 800% 데미지로 8번 공격\\n공격 당한 적은 11초 동안 행동 불가 상태\\n해당 공격으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\\n재사용 대기시간 : 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEJGKFPBID.png"
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
		.rate_dex(1.0)
		.rate_int(0.0)
		.rate_luk(4.0)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
