package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 일리움 {
	String character_class = "일리움";
	Integer cycle = 3;
	List<String> skill_type = List.of("생존", "딜상승", "힐");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"크리스탈 스킬:하모니 링크",
			"크리스탈과 일리움이 축복의 기운으로 연결된다. 기운은 일리움과 기운에 닿은 파티원에게 블레스 마크를 남기고 체력을 회복시키며, 적에게는 커스 마크를 남긴다.\n필요 크리스탈 차지 : 60 이상\n※사용 후 크리스탈 차지가 초기화돼야 재사용 가능",
			"MP 200 소비, 15번 기운으로 연결, 기운이 연결 될 때 마다 블레스 마크를 얻고 최대 HP의 10% 회복\n[패시브 효과 : 상태 이상 내성 30, 모든 속성 내성 30% 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEKAKGPBMH.png"
		),
		new SynergySkill(
			"프라이멀 프로텍션",
			"자신과 파티원 모두를 일정 시간 무적 상태로 만들고 블레스 마크의 중첩에 비례하여 무적 시간이 늘어난다.\n필요 스킬 : 블레스 마크 완성 10레벨 이상",
			"MP 100 소비, 4초 무적, 블레스 마크 중첩 당 0.6초 증가\n재사용 대기시간 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEKAKFPBID.png"
		),
		new SynergySkill(
			"블레스 마크 완성",
			"완벽한 블레스 마크를 남긴다.\n필요 스킬 : 블레스 마크 숙련 10레벨 이상\n하이퍼 스킬 \"프라이멀 프로텍션\"을 익히기 위해 10레벨 이상 필요",
			"최대 10회 중첩가능, 지속시간 10초\n각 중첩의 수치가 모두 더해짐\n1~3중첩:공격력/마력 2 증가\n4~6중첩:공격력/마력 4 증가\n7~9중첩:공격력/마력 6 증가\n10중첩:공격력/마력 10 증가\n[패시브 효과 : 마키나 데미지 100%p 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEKALHOBMH.png"
		),
		new SynergySkill(
			"커스 마크 완성",
			"완벽한 커스 마크를 새긴다.\n필요 스킬 : 커스 마크 숙련 10레벨 이상",
			"최대 5회 중첩가능, 지속시간 10초\n방어율 감소는 각 중첩의 수치가 모두 더해짐\n1중첩:방어율 4% 감소\n2~3중첩:방어율 4% 감소\n4~5중첩:방어율 4% 감소\n마크가 새겨진 적을 일리움이 공격하면 40% 데미지의 추가 타격 발생, 커스 마크 중첩에 비례하여 추가 타격의 최종 데미지 5배까지 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEKAKFOBND.png"
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
		.plus_attack_power(46)
		.plus_magic_power(46)
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
