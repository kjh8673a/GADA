package com.maple.mapleservice.util.synergy.characters;

import java.util.ArrayList;
import java.util.List;

import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.util.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 라라 {
	String character_class = "라라";
	Integer cycle = 3;
	List<String> skill_type = List.of("공격 속도", "딜상승", "힐");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"발현 : 바람 그네",
			"용맥 스킬, 발현 스킬\\n용맥에 담긴 바람의 힘이 발현하여 상승 기류가 지속해서 발생하는 영역이 생성된다. 공격 속도와 이동속도, 점프력이 일정 시간 동안 증가되는 버프를 얻을 수 있고 영역 안에 있을 때 공중에서 위 방향키와 점프키를 키다운 하면 바람이 밀어주는 그네를 타고 부유할 수 있다. 발현 스킬은 자유로운 용맥을 가장 우선하며 자유로운 용맥이 없다면 가까운 용맥을 우선 소모한다. 시전 동작 중 스탠스 100%가 적용된다.\\n파티원 이용 가능 모드 온오프 : 마우스 우클릭\\n필요 스킬 : 분출 : 돌개바람 20레벨 이상\\n4차 스킬 \\\"풍월주인\\\"을 익히기 위해 20레벨 이상 필요",
			"MP 80 소비, 30초 동안 지속되는 바람 그네 설치\\n영역에 들어오면 공격 속도 1단계, 이동 속도 20, 점프력 20만큼 증가하는 버프 지급\\n해당 버프는 자신에게는 120초, 파티원에게는 20초 동안 지속\\n바람 그네 영역 내에서 공중에서 위 방향키와 점프키 키다운 시 최대 4.5초 동안 부유 가능\\n재사용 대기시간 60초\\n[패시브 효과 : 돌개바람의 데미지 35%p 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEJAKGPBMA.png"
		),
		new SynergySkill(
			"발현 : 햇살 가득 안은 터",
			"용맥 스킬, 발현 스킬\\n용맥에 담긴 해의 힘이 발현하며 따스한 햇살이 내리쬐는 터를 생성한다. 일정 시간 데미지가 증가하는 버프를 받을 수 있고 영역 안에서는 햇살이 지닌 생명의 힘으로 일정 시간마다 HP가 회복된다. 발현 스킬은 자유로운 용맥을 가장 우선하며 자유로운 용맥이 없다면 가까운 용맥을 우선 소모한다. 시전 동작 중 스탠스 100%가 적용된다.\\n필요 스킬 : 분출 : 해돋이 우물 20레벨 이상\\n4차 스킬 \\\"풍월주인\\\"을 익히기 위해 20레벨 이상 필요",
			"MP 80 소비, 20초 동안 지속되는 햇살이 내리쬐는 터 설치, 영역에 들어오면 데미지 25% 증가하는 버프 지급\\n해당 버프는 자신에게는 120초, 파티원에게는 20초 동안 지속\\n영역 안에는 2초마다 최대 HP의 10% 회복\\n재사용 대기시간 60초\\n[패시브 효과 : 해돋이 우물의 데미지 48%p 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEJAKGPBMD.png"
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
		.plus_attack_power(0)
		.plus_magic_power(0)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(0)
		.plus_damage(25)
		.plus_final_damage(0)
		.plus_critical_damage(0)
		.build();
}
