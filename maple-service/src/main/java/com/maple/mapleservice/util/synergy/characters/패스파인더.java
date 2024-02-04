
package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 패스파인더 {
	String character_class = "패스파인더";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승", "생존");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"샤프 아이즈",
			"일정 시간 동안 파티원 전원에게 적의 약점을 찾아 치명상을 입힐 수 있는 능력을 부여한다.",
			"MP 45 소비, 300초 동안 크리티컬 확률 20%, 크리티컬 데미지 15% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPBKFPBMC.png"
		),
		new SynergySkill(
			"옵시디언 배리어",
			"[인챈트 포스]\\n렐릭의 힘을 증폭하여 자신과 파티원을 보호한다.\\n보호의 힘을 받는 파티원은 고대의 저주 디버프가 걸린 적 공격 시 크리티컬 데미지 상승 효과를 받을 수 있다.\\n옵시디언 배리어의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\\n디스차지 강화\\n주위 파티원에게 개인 보호막을 걸어준다.\\n블래스트 강화\\n보호막 크기가 커진다.\\n트랜지션 강화\\n보호막을 재설치할 수 있다",
			"렐릭 게이지 300 소비, 지속 시간 12초, 최대 HP의 일정 비율로 피해를 입히는 공격에 피격 시 20% 피해 감소\\n일정 주기로 보호막 범위 내 최대 8명의 적을 760%의 데미지로 4번 공격\\n재사용 대기시간 120초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLEPBPH.png"
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
		.plus_critical_damage(15)
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
