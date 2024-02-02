package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 메카닉 {
	String character_class = "메카닉";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승", "힐", "텔레포트");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"오픈게이트 : GX-9",
			"오픈게이트 <GX-9>을 설치한다. 게이트는 동시에 2개까지 설치할 수 있으며, 게이트와 게이트를 통해 자신 및 파티원이 자유롭게 이동할 수 있다. 단, 게이트 간 거리가 너무 멀 경우에는 작동하지 않으며 1회 이용 후 다시 이용하기 위해서 충전 시간이 필요하다. \\n파티원 이용 가능 모드 온오프 : 마우스 우클릭",
			"MP 50 소비, 300초 동안 지속되는 오픈게이트 소환, 1회 이용 후 2초 동안 이용 불가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMHKHPBMF.png"
		),
		new SynergySkill(
			"서포트 웨이버 : H-EX",
			"고정형 다기능 전투 서포트용 로봇 <H-EX>를 소환한다. <H-EX>는 특수한 파동을 이용하여 적의 방어율을 낮추고, 자신을 포함한 주변 파티원의 HP를 회복시킨다. 추가로, 모든 속성 및 상태 이상 내성이 증가한다.\\n4차 스킬 \\\"서포트 웨이버 강화\\\"를 익히기 위해 20레벨 이상 필요",
			"MP 100 소비, 80초 동안 서포트 웨이버 설치, 지속 시간 동안 설치된 맵의 몬스터 방어율 10% 감소, 서포트 웨이버 주변의 자신을 포함한 파티원의 HP 8%를 5초 주기로 자동회복, 지속시간 경과 시 500%의 데미지로 자폭\\n[패시브 효과 : 상태 이상 내성 40, 모든 속성 내성 40% 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMHKGPBMI.png"
		),
		new SynergySkill(
			"서포트 웨이버 강화",
			"서포트 웨이버를 업그레이드 시킨다.\\n필요 스킬 : 서포트 웨이버 : H-EX 20레벨",
			"서포트 웨이버 주변의 나를 포함한 모든 파티원들의 최종 데미지 7% 증가, 자폭 데미지 1100%로 증가, HP 회복 범위 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMHKFOBMC.png"
		),
		new SynergySkill(
			"서포트 웨이버:H-EX-파티 리인포스",
			"서포트 웨이버:H-EX로 강화되는 파티원들의 최종 데미지를 추가로 증가시킨다. 서포트 웨이버 강화의 효과와 합하여 적용된다.\\n필요 스킬 : 서포트 웨이버 강화 10 레벨",
			"파티원 최종 데미지 4% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMHKFOBIH.png"
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
		.plus_final_damage(11)
		.plus_critical_damage(0)
		.build();

	StatWeightForCalculate statWeightForCalculate = StatWeightForCalculate.builder()
		.rate_str(1.0)
		.rate_dex(4.0)
		.rate_int(0.0)
		.rate_luk(0.0)
		.rate_hp(0.0)
		.rate_attack_power(1.0)
		.rate_magic_power(0.0)
		.build();
}
