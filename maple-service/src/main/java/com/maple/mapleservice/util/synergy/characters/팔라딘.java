
package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 팔라딘 {
	String character_class = "팔라딘";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승", "버프 해제", "바인드", "생존");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"노블 디맨드",
			"신성한 기사의 긍지를 방출하여 일정 확률로 주변 다수의 적의 공격력, 방어율, 명중치를 일정 시간 동안 감소시킨다.",
			"MP 24 소비, 100% 확률로 80초 동안 최대 6명의 적의 공격력, 방어율 50%, 8초 동안 명중치 50%만큼 감소",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJGPBND.png"
		),
		new SynergySkill(
			"컴뱃 오더스",
			"일정 시간 동안 자신을 포함한 파티원 전원의 모든 스킬 레벨을 증가시켜준다. 각 직업군의 4차 스킬에 한해 마스터 레벨 이상으로 증가시킬 수 있으며 그 외 스킬은 마스터 레벨까지만 올려줄 수 있다.\n예외적으로 일부 특별한 스킬과 초보자 스킬, 컴뱃 오더스, 하이퍼 스킬, 5차 스킬, 6차 스킬의 스킬 레벨은 올려줄 수 없다. \n필요 스킬 : 리스토네이션 5레벨 이상",
			"MP 36 소비, 200초 동안 모든 스킬 레벨 2 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJGPBNB.png"
		),
		new SynergySkill(
			"가디언 스피릿",
			"가장 가까운 파티원 한 명을 부활시키고 일정 시간 동안 부활한 파티원과 자신에게 무적 효과가 적용된다. 부활 후 무적은 버프 지속시간 증가 효과가 적용되지 않는다.",
			"MP 50 소비, 가장 가까운 파티원 부활 후 10초 동안 무적\n재사용 대기시간 600초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJFPBNG.png"
		),
		new SynergySkill(
			"홀리 유니티",
			"신성한 힘으로 자신 근처의 파티원 1명과 자신을 결속시킨다. 마지막으로 결속된 파티원이 범위 내 있다면 우선적으로 결속된다.\n자신의 일부 공격 스킬과 버프 스킬 사용 시 결속된 파티원에 함께 사용되고 결속된 파티원이 없는 상태에서 자신의 근처에 파티원이 접근하면 해당 파티원과 자동 결속된다.\n파티원이 자신으로부터 일정 범위를 벗어나거나 홀리 유니티가 해제되면 결속이 해제되어 파티원에게 적용된 팔라딘의 버프가 함께 해제된다. 팔라딘이나 이미 다른 팔라딘과 결속된 파티원과는 결속할 수 없다.\n스킬 지속 중 스킬을 다시 사용하면 숫자키로 결속할 파티원을 선택할 수 있다. 파티UI에서의 위치에 따라 각 파티원에 숫자가 부여되며 자신, 이미 결속된 파티원, 결속할 수 없는 파티원은 선택할 수 없다.",
			"MP 1000 소비, 45초 동안 최종 데미지 75% 증가\n파티원과 결속 : 시전되는 공격 스킬의 최종 데미지 40% 반영, 파티원에게 사용되는 버프 스킬의 지속시간 65% + 자신의 힘 1000 당 1% 반영되어 최대 100%까지 반영\n재사용 대기시간 : 90초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLGPBMD.png"
		),
		new SynergySkill(
			"디바인 블레싱",
			"신성한 축복을 받아 일정 시간 동안 최종 데미지가 증가한다.",
			"MP 30 소비, 200초 동안 최종 데미지 20% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJFPBNF.png"
		),
		new SynergySkill(
			"새크로생티티",
			"신의 가호를 받아 잠시 동안 절대적인 신성불가침의 영역에 들어선다. 팔라딘은 스킬 재사용 시 즉시 종료되며 남은 지속시간에 비례해 재사용 대기시간이 감소한다.",
			"MP 600 소비, 30초 동안 무적 상태. 팔라딘은 스킬 종료 시 남은 지속시간 5초 마다 재사용 대기시간 45초 감소\n재사용 대기시간 300초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJFPBJE.png"
		),
		new SynergySkill(
			"매직 크래쉬",
			"일정 확률로 주변 적들에게 적용된 일부 버프를 해제하며, 지정된 시간 동안 버프 효과가 적용될 수 없도록 제한한다.\n공격을 받은 적은 90초 동안 매직 크래쉬 상태 이상에 저항한다. 해제되는 버프는 공격력/마력 증가, 방어력 증가, 하드 스킨이다",
			"MP 15 소비, 100% 확률로 일부 버프 해제, 22초 동안 버프 효과 제한\n재사용 대기시간 60초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJFPBNE.png"
		),
		new SynergySkill(
			"스마이트",
			"신의 힘이 깃든 망치를 소환하여 주위 적에게 강력한 일격을 내리친다. 이 때 타격 당한 적은 일부 버프가 해제되며 행동 불가 시간 동안 버프 효과가 적용될 수 없도록 제한된다.\n해제되는 버프는 공격력/마력 증가, 방어력 증가, 하드 스킨이다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 스마이트 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.",
			"MP 400 소비, 최대 15명의 적을 500% 데미지로 6번 공격, 공격 당한 적은 10초 동안 행동 불가\n스마이트로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n재사용 대기시간 120초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPDJFPBJC.png"
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
		.plus_final_damage(60)
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
