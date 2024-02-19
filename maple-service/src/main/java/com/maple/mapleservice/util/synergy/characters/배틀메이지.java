package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 배틀메이지 {
	String character_class = "배틀메이지";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승", "생존", "힐");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"옐로우 오라",
			"자신의 몸에서 밝은 노란 빛의 오라를 방출하여 주위의 파티원들의 이동속도, 공격 속도를 증가시킨다. 스킬을 한 번 더 사용해서 오라를 해제할 수 있으며, 다른 종류의 오라를 사용하면 해제된다. 추가로 이동속도, 최대 이동속도, 점프력, 공격 속도, 회피율이 영구히 증가한다.\n3차 스킬 다크 라이트닝을 배웠을 때 텔레포트 Ver.2 이동거리 증가 온오프 : 마우스 우클릭",
			"초당 MP 8 소비, 이동속도 10, 공격 속도 1단계 증가\n재사용 대기시간 3초\n[패시브 효과 : 이동속도 30, 최대 이동속도 20,  점프력 20, 공격 속도 2단계, 회피율 15% 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMALHPBNG.png"
		),
		new SynergySkill(
			"드레인 오라",
			"자신의 몸에서 붉은 빛의 오라를 방출하여 주위의 파티원들이 적에게 입힌 데미지의 일부를 HP로 흡수시켜주는 능력을 가지게 한다. 한 번에 캐릭터 최대 HP의 20%를 초과하여 회복할 수 없다. 스킬을 한 번 더 사용해서 오라를 해제할 수 있으며, 다른 종류의 오라를 사용하면 해제된다. 추가로 적을 해치울 때마다 적의 영혼을 제물로 최대 HP의 일정비율을 회복하는 능력을 영구히 가진다.",
			"초당 MP 28 소비, 준 데미지의 1%만큼 HP 회복, 한 번 회복 후 5초 동안 재회복 불가, 배틀메이지가 준 데미지는 드레인 오라 범위 안의 파티원의 HP도 함께 회복시킴\n재사용 대기시간 3초\n[패시브 효과 : 4초 마다 최대 HP의 2% + 1000 회복, 적을 해치울 때마다 최대 HP의 1% 회복]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKHPBMJ.png"
		),
		new SynergySkill(
			"블루 오라",
			"자신의 몸에서 푸른 빛의 오라를 방출하여 주위 파티원들의 상태 이상 내성을 증가시키고 피격 데미지를 감소시킨다. 스킬을 한 번 더 사용해서 오라를 해제할 수 있으며, 다른 종류의 오라를 사용하면 해제된다. 추가로 상태 이상 내성, 모든 속성 내성, 방어력이 증가하고 피격 데미지 감소가 영구히 증가한다.",
			"초당 MP 12 소비, 상태 이상 내성 20 증가, 피격 데미지 15% 감소.\n재사용 대기시간 3초\n[패시브 효과 : 상태 이상 내성 30, 모든 속성 내성 30%, 방어력 150% 증가, 피격 데미지 25% 감소]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKGPBNC.png"
		),
		new SynergySkill(
			"다크 오라",
			"자신의 몸에서 신비한 힘을 가진 검은 오라를 방출하여 파티원들의 데미지를 증가시킨다. 스킬키를 한 번 더 사용해서 오라를 해제할 수 있으며, 다른 종류의 오라를 사용하면 해제된다. 추가로 마력이 영구히 증가하며 컴뱃 오더스가 적용되지 않는다.",
			"초당 MP 16 소비, 데미지 10% 증가\n재사용 대기시간 3초\n[패시브 효과 : 마력 15% 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKFPBNH.png"
		),
		new SynergySkill(
			"디버프 오라",
			"자신의 몸에서 불길한 오라를 방출하여 적을 약화시킨다. 스킬키를 한 번 더 사용해서 오라를 해제할 수 있으며, 다른 종류의 오라를 사용하면 해제된다. 디버프 오라는 적에게 적용되는데 일정 시간이 필요하지만 오라를 해제하고서도 일정 시간 효과가 적용된다. 컴뱃 오더스가 적용되지 않는다.",
			"초당 MP 26 소비, 적의 방어율 20% 감소, 적용되는데 2초 필요하나 오라 해제 후에도 60초 동안 적용\n재사용 대기시간 3초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKFPBNI.png"
		),
		new SynergySkill(
			"쉘터",
				"자신을 중심으로 마법의 보호막을 생성하여 파티원들을 보호한다. 보호막 안에서는 적의 공격에 데미지를 받지 않으며, 고정 피해를 입히는 공격에 피격 시 피해를 감소시킨다.",
				"MP 150 소비, 지속 시간 40초, 최대 HP의 일정 비율로 피해를 입히는 공격에 피격 시 10% 피해 감소\n재사용 대기시간 180초",
				"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKFPBMG.png"
		),
		new SynergySkill(
			"유니온 오라",
			"모든 오라와 사신의 힘을 하나로 한다. 유니온 오라 사용 중 오라류 스킬을 사용할 수 없고 파티원 배틀메이지의 유니온 오라 적용 중에는 디버프 오라, 유니온 오라를 제외한 오라류 스킬을 사용할 수 없다. 유니온 오라 종료 시 유니온 오라 사용 이전 적용 중이던 오라 스킬이 자동으로 발동된다.",
			"초당 MP 100 소비, 40초 동안 모든 오라 효과 동시에 적용, 자신은 마력 60 추가 증가\n블로우류 스킬이 MP를 75 소모, 최대 10명의 적을 300%로 12번 공격하는 사신의 낫으로 강화, 추가 크리티컬 확률 50%, 몬스터 방어율 50% 추가 무시\n재사용 대기시간 90초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLFPBMG.png"
		),
		new SynergySkill(
			"다크 오라-보스 킬러",
			"다크 오라에 보스 몬스터 공격 시 데미지를 증가시키는 기능을 추가한다.",
			"보스 몬스터 공격 시 데미지 5% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKFOBKA.png"
		),
		new SynergySkill(
			"디버프 오라-엘리멘탈 리셋",
			"디버프 오라에 적의 속성 내성을 감소시키는 기능과 적이 받는 최종 데미지가 증가하는 기능을 추가한다.\n소울마스터의 <트루 사이트-인핸스>, 플레임위자드의 <스피릿 오브 플레임> 파티원 적용으로 인한 속성 내성 감소와 중복 적용되지 않는다.",
			"공격 속성 내성 10% 감소, 적이 받는 최종 데미지 8% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFMAKFOBKB.png"
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
		.plus_boss_damage(5)
		.plus_damage(10)
		.plus_final_damage(8)
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
