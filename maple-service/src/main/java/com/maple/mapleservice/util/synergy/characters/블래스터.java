package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.util.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 블래스터 {
	String character_class = "블래스터";
	Integer cycle = 2;
	List<String> skill_type = List.of("바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"퍼지 에어리어",
			"주위에 결계를 펼쳐 결계 안으로 들어오는 적들의 공격력과 이동속도, 방어율을 감소시킨다. "
				+ "추가로 영구히 보스 사냥 시 추가 데미지를 줄 수 있다.",
			"MP 41 소비, 40초 동안 지속, 결계 안의 보스 몬스터를 제외한 적의 공격력 및 방어율 30% 감소, 이동속도 -60 [패시브 효과 : 보스 몬스터 공격 시 데미지 10% 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEKDLHPBMC.png"
		),
		new SynergySkill(
			"쇼다운 챌린지",
			"최대 6명의 적을 공격하며 도발하여 부딪히지 않는 상태로 만든다. "
				+ "도발당한 적은 경험치 획득량과 아이템 드롭율도 함께 증가하며 보스에게도 절반의 효과가 적용된다. "
				+ "부적이 폭발할 때 어둠의 수리검이 생성되어 주변의 적을 추적하여 공격한다. "
				+ "어둠의 수리검은 공격반사 상태의 적을 공격해도 피해를 입지 않는다.",
			"MP 50, 표창 3개 소비 "
				+ "최대 6명의 적 708% 데미지로 2번 공격하고 6개의 수리검을 생성하며 도발 "
				+ "도발당한 적은 부딪히지 않은 상태 지속. 140초 동안 획득 경험치, 아이템 드롭률 5% 증가, 보스일 경우 효과 절반 "
				+ "수리검은 24% 데미지로 6번 공격을 하며 한 명의 적이 여러 개의 수리검에 맞을 경우 두 번째 수리검부터 최종 데미지 50% 감소, 일반 몬스터 공격 시 데미지 200% 증가 "
				+ "수리검 생성 후 재생성까지 대기시간 5초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEKDLHPBMC.png"
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
		.plus_attack_power(10)
		.plus_magic_power(10)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(0)
		.plus_damage(0)
		.plus_final_damage(0)
		.plus_critical_damage(0)
		.build();
}
