
package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 히어로 {
	String character_class = "히어로";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승", "버프 해제");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"스피릿 블레이드",
			"검과 영혼이 일체가 되어 일정 시간 동안 자신을 포함한 파티원의 공격력을 증가시키고 자신이 받는 데미지를 증폭시켜 반사한다.",
			"MP 20 소비, 200초 동안 자신을 포함한 파티원의 공격력 30 증가\\n피격 데미지 30% 감소 후 500% 증폭시켜 반사",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDKHPBMG.png"
		),
		new SynergySkill(
			"인사이징",
			"[검술] 정신을 집중하여 전방으로 검을 크게 내리긋는다. 궁극의 검술로 영혼에 새겨진 검이 실체화되어 공격하는 것처럼 보인다. 공격 당한 적은 상처를 입어 일정 시간 동안 도트 데미지를 입고, 도트 데미지를 입는 동안 크리티컬에 의한 피해량이 증가한다.\\n필요 스킬 : 어드밴스드 콤보 20레벨 이상",
			"MP 36 소비, 8명의 적에게 400%의 데미지로 4번 공격, 일반 몬스터 공격 시 데미지 50% 증가\\n공격당한 적은 100% 확률로 60초 동안 2초마다 165%의 피해를 입으며 크리티컬에 한해 데미지 25% 증가, 파티원이 공격 시 10% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDKFPBNF.png"
		),
		new SynergySkill(
			"매직 크래쉬",
			"일정 확률로 주변 적들에게 적용된 일부 버프를 해제하며, 지정된 시간 동안 버프 효과가 적용될 수 없도록 제한한다.\\n공격을 받은 적은 90초 동안 매직 크래쉬 상태 이상에 저항한다. 해제되는 버프는 공격력/마력 증가, 방어력 증가, 하드 스킨이다.",
			"MP 15 소비, 100% 확률로 일부 버프 해제, 22초 동안 10명의 적의 버프 효과 제한\\n재사용 대기시간 60초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDKFPBNG.png"
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
		.plus_attack_power(30)
		.plus_magic_power(0)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(0)
		.plus_damage(10)
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
