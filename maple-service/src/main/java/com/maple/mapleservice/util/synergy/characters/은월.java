package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 은월 {
	String character_class = "은월";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승", "바인드");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"약화",
			"공격 시 일정 확률로 적에게 약화의 정령을 빙의시킨다.",
			"공격 시 10% 확률로 대상은 15초 동안 받는 데미지가 20% 증폭되는 디버프에 걸림, 명중치 60%, 회피치 40% 만큼 추가 감소",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNHKGODNA.png"
		),
		new SynergySkill(
			"분혼 격참",
			"화염의 정령을 강령시켜, 전방에 있는 적들을 공격한다.\n공격에 당한 적은 영혼이 분리된다.\n공격을 받은 적은 90초 동안 분혼 격참에 저항하여 분혼 격참으로 공격당하더라도 영혼이 분리되지 않는다.",
			"MP 100 소비, 최대 6명의 적을 2000%의 데미지로 1번 공격\n공격에 당한 적은 영혼 분리\n단, 고정형 몬스터는 영혼이 분리되지 않지만 받는 최종 데미지가 20% 증가\n[분리 된 영혼]: 본체와 HP 공유, 받는 최종 데미지 80% 감소, 공격 당한 위치에 10초 동안 생성\n분혼 격참으로 적에게 준 데미지에 따라 영혼 지속시간 최대 100% 증가\n본체 또는 분리 된 영혼 처치 시 획득 경험치 100% 만큼 추가 획득\n재사용 대기시간: 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNHKFPBMH.png"
		),
		new SynergySkill(
			"귀문진",
			"정령이 소환되는 영역을 생성한다. 정령은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.",
			"MP 1000 소비, 30초 동안 일정 주기마다 8초 동안 존재하는 정령 2마리를 소환하는 영역 생성, 정령은 최대 10마리까지 존재 가능\n정령은 영역 주위의 적을 찾아 495%의 데미지로 6번 공격한 후 적에게 달라붙어 소멸하면서 8초 동안 디버프 부여\n디버프에 걸린 적을 공격할 때 크리티컬 확률 16%, 크리티컬 데미지 2% 증가\n디버프는 최대 5번까지 중첩 가능\n재사용 대기시간 60초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLCPBOC.png"
		),
		new SynergySkill(
			"속박술",
			"속박의 정령이 깃들어 있는 영역을 생성한다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 속박술 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"MP 65 소비, 10초 동안 속박의 영역 생성\n영역 안에 있는 적은 같은 시간 동안 행동 불가 상태에 걸리고 700%의 데미지로 3번 공격 받음\n속박술로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n적이 행동 불가 상태에 걸리지 않으면 데미지도 받지 않음\n재사용 대기시간: 210초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNHKGPDMG.png"
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
		.plus_damage(70)
		.plus_final_damage(0)
		.plus_critical_damage(10)
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
