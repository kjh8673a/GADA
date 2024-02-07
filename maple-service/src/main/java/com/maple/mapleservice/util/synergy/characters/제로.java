package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 제로 {
	String character_class = "제로";
	Integer cycle = 2;
	List<String> skill_type = List.of("딜상승", "바인드", "경직", "공격 속도");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"타임 디스토션",
			"초월자의 힘으로 시간을 조정하는 시간의 영역을 생성한다.",
			"타임 포스 30 소비, 30초 동안 시간의 영역 생성 \n[영역 안에 있는 적]: 4초 마다 버프 해제, 받는 데미지 25% 증가 및 일반 몬스터 경직 \n[영역 안에 있는 자신과 파티원]: 4초 마다 마법 무효화 및 상태 이상 해제, 공격 속도 1단계 증가 \n재사용 대기시간 240초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEPCLHPDKB.png"
		),
		new SynergySkill(
			"쉐도우 레인",
			"알파와 베타의 합동 필살기이다. 베타가 대검의 비를 내리게 하여 모든 적의 움직임을 정지시키고, 떨어진 대검들은 알파의 그림자로 변하여 모든 적들에게 치명타를 준다.",
			"타임 포스 50 소비 \n[베타]: 최대 15명의 적을 1600%의 데미지로 7번 공격 \n[알파]: 최대 15명의 적을 1600%의 데미지로 7번 공격\n재사용 대기시간 300초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEPCLHPDED.png"
		),
		new SynergySkill(
			"디바인 오라",
			"초월자의 힘으로 주변에 있는 파티원의 공격력, 마력, 공격 속도, 이동속도, 점프력, 방어력, 속성 내성, 상태 이상 내성을 증가시켜준다. 스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬",
			"타임 포스 20 소비, 공격력 20, 마력 20, 공격 속도 1단계, 이동속도 20, 점프력 10, 방어력 500, 모든 속성 내성 10%, 상태 이상 내성 10 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEPCLHPDKD.png"
		),
		new SynergySkill(
			"크리티컬 바인드",
			"베타가 공격 시 일정 확률로 보스 몬스터의 시간을 멈추어 행동 불가 상태로 만든다. 대상은 걸려있던 출혈 효과가 폭발하며 알파의 공격에 취약해진다. 크리티컬 바인드는 다른 행동 불가 스킬과 저항을 공유하지 않는다. 보스 몬스터에게 다른 행동 불가 효과가 적용되어 있다면 이전에 걸린 행동 불가 효과가 크리티컬 바인드 지속 시간의 절반 이하로 남았을 때부터 크리티컬 바인드로 행동 불가 상태로 만들 수 있다.",
			"베타가 공격 시 10% 확률로 4초 동안 행동 불가 상태 적용, 행동 불가 상태에 걸리지 않는 대상이나 일반 몬스터는 같은 시간 동안 디버프 부여\n크리티컬 바인드로 행동 불가 상태가 되거나 디버프에 걸린 대상은 알파의 공격에 30% 만큼 크리티컬 확률, 20% 만큼 크리티컬 데미지 추가 적용\n걸려 있는 출혈 효과는 남은 시간에 비례하여 데미지를 준 후 소멸 \n행동 불가 효과에 걸린 대상은 35초 동안 크리티컬 바인드 스킬에 저항하여 행동 불가 상태가 되지 않음",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEPDKFOANA.png"
		),
		new SynergySkill(
			"리미트 브레이크",
			"시간을 얼려 한계를 넘는다. 발동 시 공격을 받은 적은 행동 불가 상태가 되나 90초 동안 행동 불가 상태 이상에 저항하여 리미트 브레이크 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.\n스킬을 재사용하여 즉시 종료할 수 있고 스킬을 종료해도 리미트 브레이크의 효과는 종료되지 않는다. 스킬 종료 시 가하는 충격은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있다.\n브레이크 모드 시 스킬이 종료될 때 공격을 받은 적에게 행동 불가 상태를 적용한다. 아래 방향키와 함께 스킬을 사용하면 반대 모드가 발동된다.\n브레이크 모드 온오프 : 마우스 우클릭",
			"타임 포스 50 소비, 최대 15명의 적을 450%의 데미지로 5번 공격, 대상은 10초 동안 행동 불가 상태 적용\n발동 시 공격으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n이후 25초 동안 재사용 대기시간 초기화의 영향을 받지 않는 스킬을 제외한 스킬의 재사용 대기시간이 260% 더 빠르게 감소, 공격 속도 2단계 증가, 최종 데미지 36% 증가, 주변의 적을 느리게 만듦\n종료될 때 주변의 최대 15명의 적에게 825%의 데미지로 12번 공격하는 충격을 6번 추가로 가함, 발동 시 공격에 적중된 적 및 최대 HP가 가장 높은 보스 몬스터를 우선으로 공격\n재사용 대기시간 120초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLGPBNF.png"
		),
		new SynergySkill(
			"아머 스플릿",
			"대검의 위력을 높여 공격 시 일정 확률로 적의 방어구를 쪼개 방어율을 감소시킨다.",
			"베타가 공격 시 20% 확률로 20초 동안 대상의 방어율 10%만큼 감소 \n최대 5번 중첩",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEPDKGOAMD.png"
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
		.plus_attack_power(20)
		.plus_magic_power(20)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(0)
		.plus_damage(25)
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
