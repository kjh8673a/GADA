package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.util.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 미하일 {
	String character_class = "미하일";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승", "생존");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"인커리지",
			"동료들을 격려하여 일정 시간 동안 자신을 포함한 파티원의 공격력을 증가시킨다. 추가로 로얄 가드 1, 2, 3단계의 반격 위력이 증가한다.\\n3차 스킬 \\\"어드밴스드 로얄 가드\\\"를 익히기 위해 20레벨 이상 필요",
			"MP 20 소비, 180초 동안 공격력 30 증가\\n[패시브 효과 : 로얄 가드 1, 2, 3단계 반격 데미지 70%p 증가]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFKDKHPBME.png"
		),
		new SynergySkill(
			"소울 링크",
			"주변의 동료들과 영혼을 공명하여 강력한 힘을 발휘한다. 소울 링크 활성화 중 일정 주기마다 소울 링크 범위 내의 파티원을 강화하고, 로얄 가드의 반격에 성공할 때 소울 링크 범위 내의 파티원을 보호한다.\\n스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬",
			"동일한 맵 내에 있는 파티원 1명마다 데미지 5% 증가, 파티를 하지 않았을 때는 자신만 파티한 것으로 취급\\n[파티원] : 미하일이 로얄 가드를 성공할 때 소울 링크 범위 내의 파티원에게 10.0초 동안 파티원 각각의 최대 체력의 10%에 해당하는 보호막 생성\\n일정 주기 마다 8초 동안 소울 링크 범위 내의 파티원에게 로얄 가드에 의해 증가하는 공격력의 50%만큼 공격력과 마력 증가, 어드밴스드 로얄 가드로 증가하는 상태 이상 내성의 20%, 방어력 증가율의 30% 공유",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFKDKGPBMI.png"
		),
		new SynergySkill(
			"데들리 차지",
			"[소울 라이트 스킬]\\n소울의 힘을 사용할 수 있는 빛의 기사를 소환하여 치명적인 돌격을 감행한다.",
			"MP 300 소비, 최대 15명의 적을 825%의 데미지로 10번 공격\\n공격에 적중한 적에게 60초 동안 자신을 포함한 파티원의 데미지 10%가 증가하는 상태 이상 디버프 발생\\n공격 시 50%의 확률로 암흑 적용, 암흑은 10초 동안 지속되며 대상의 명중률 30% 감소\\n재사용 대기시간 15초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFKDKFPBJC.png"
		),
		new SynergySkill(
			"로 아이아스",
			"적들의 공격으로부터 동료를 지키는 방패가 되어 일정 시간 동안 영역 안의 파티원이 입는 피해와 치명적인 상태 이상을 방어하고 자신의 최종 데미지를 증가시킨다.",
			"MP 1000 소비, 99초 동안 최종 데미지 33% 증가\\n25초동안 방패를 들어 자신과 파티원이 해당 영역에서 받는 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 83% 감소 및 치명적인 상태이상 방어\\n적의 공격 및 상태이상 방어 성공 시 방패가 3단계에 걸쳐 부서지며 각 단계당 10, 10, 15회씩 방어 가능, 상태이상과 공격이 동시에 적용되는 경우 방어 가능 횟수 1회만 감소\\n재사용 대기시간 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLGPBNB.png"
		),
		new SynergySkill(
			"라이트 오브 커리지",
			"꺼지지 않는 용기의 빛을 발산해 동료들의 두려움을 잊게 한다.",
			"MP 1000 소비, 25초 동안 데미지 25% 증가\\n파티 효과 : 자신을 포함한 파티원 각각의 최대 체력의 300%에 해당하는 보호막 생성, 보호막은 12초 동안 유지되고 1초 마다 최대치의 7% 감소\\n재사용 대기시간 90초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLGPAOH.png"
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
		.plus_attack_power(40)
		.plus_magic_power(10)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(0)
		.plus_damage(10)
		.plus_final_damage(0)
		.plus_critical_damage(0)
		.build();
}
