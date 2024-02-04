package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 제논 {
	String character_class = "제논";
	Integer cycle = 3;
	List<String> skill_type = List.of("바인드", "딜상승", "버프 해제");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"홀로그램 그래피티 : 융합",
			"모든 홀로그램 그래피티의 기능을 통합한 최신예 홀로그램 필드를 전개한다. 이전에 설치한 홀로그램 그래피티와 영역이 겹치면 홀로그램 그래피티를 제거 후 전개한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\\n필요 스킬 : 홀로그램 그래피티 30레벨 이상",
			"MP 1000 소비, 30초 동안 홀로그램 필드 생성\\n볼이 홀로그램 필드에 닿을 때마다 최대 10명의 적에게 550%로 5번 공격, 볼에 몬스터가 닿을 때도 동일한 데미지를 줌\\n홀로그램 필드 안의 파티원 데미지 20% 증가, 필드 안의 파티원이 회피 시 서플러스 에너지 1개 충전\\n제논이 홀로그램 필드 안에 있을 경우 이지스 시스템으로 발사되는 미사일 8개 증가\\n재사용 대기시간 90초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLDPBIE.png"
		),
		new SynergySkill(
			"멜트다운 익스플로젼",
			"우주로부터 지상의 모든 것을 태워버리는 강력한 레이저 포격을 한다. 사용 후 일정 시간 동안 데미지가 증가한다. 재사용 대기시간 감소 효과를 받지 않는다.",
			"MP 200 소비, 최대 15명의 적에게 1500% 데미지로 6번 공격, 공격을 받은 적은 10초 동안 방어력 30% 감소. 시전 동작 중 무적.\\n사용 후 25초 동안 데미지 10% 증가\\n재사용 대기시간 50초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMEKFPBJC.png"
		),
		new SynergySkill(
			"컨파인 인탱글",
			"전방 다수의 적들에게 에너지소드를 휘둘러 일부 버프를 해제하고 결박하여 행동 불가 상태로 만든다. 결박된 적은 행동 불가 시간 동안 버프 효과가 적용될 수 없도록 제한된다.\\n해제되는 버프는 공격력/마력 증가, 방어력 증가, 하드 스킨이다.\\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 컨파인 인탱글 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"MP 200 소비, 최대 15명의 적에게 700% 데미지로 4번 공격. 100%확률로 대상의 모든 버프를 해제하고 10초 동안 행동 불가.\\n컨파인 인탱글로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\\n재사용 대기시간 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMEKFPBJD.png"
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
		.plus_damage(20)
		.plus_final_damage(0)
		.plus_critical_damage(0)
		.build();

	StatWeightForCalculate statWeightForCalculate = StatWeightForCalculate.builder()
		.rate_str(4.0 * 0.875)
		.rate_dex(4.0 * 0.875)
		.rate_int(0.0)
		.rate_luk(4.0 * 0.875)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
