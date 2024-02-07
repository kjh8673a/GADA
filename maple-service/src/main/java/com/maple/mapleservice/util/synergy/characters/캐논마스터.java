
package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 캐논마스터 {
	String character_class = "캐논마스터";
	Integer cycle = 0;
	List<String> skill_type = List.of("잡몹 처리", "딜상승", "힐");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"하이퍼 몽키 스펠",
			"몽키 매직을 업그레이드하여 몽키의 마법으로 일정 시간 동안 주변 파티원들의 HP, MP, 올스탯, 이동속도, 점프력을 높여준다. 다른 모든 버프 스킬과 중복으로 사용할 수 있다.\n필요 스킬 : 몽키 매직 20레벨 이상",
			"MP 80 소비, 180초 동안 HP 1000, MP 1000, 올스탯 60, 이동속도 15, 점프력 10 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPHIFOBMI.png"
		),
		new SynergySkill(
			"파이렛 플래그",
			"용감한 해적의 깃발을 꽂아 자신을 비롯한 파티원의 사기를 높이고 적을 두렵게 한다. 깃발을 꼽는 도중에는 적의 어떠한 공격에도 밀려나지 않는다.",
			"MP 500 소비, 30초 동안 해적 깃발 소환\n해적 깃발 주변에 있는 파티원의 AP를 직접 투자한 모든 능력치 25% 증가, 몬스터 방어율 25% 감소\n재사용 대기시간 30초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLHPBNH.png"
		),
		new SynergySkill(
			"풀 메이커",
			"지형에 다수의 크레이터를 만들 만한 포격을 연사한다. 포격은 잠시 후 캐논슈터 주위의 적에게 떨어지며 최대 HP가 가장 높은 보스 몬스터 및 이전 포격에서 살아남은 적에게 우선적으로 떨어진다. 첫 번째 포격과 마지막 포격에 자신을 포함한 파티원이 사용할 수 있는 보급품이 함께 투하된다.\n포격이 떨어질 발판이 없거나 매달리면 떨어지지 않고 포격 발생 횟수가 남아있는 상태에서 맵을 이동하거나 재사용 대기시간이 초기화되면 스킬이 종료된다.\n포격은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 보급품에 다가가서 위쪽 화살표 키를 누르면 사용할 수 있다",
			"MP 1000 소비, 최대 8명의 적을 1540%의 데미지로 3번 공격하는 포격 최대 20회 발생\n보급품 : 20초 동안 유지, 사용 시 최대 HP의 20% 회복 후 20초 동안 유지되는 데미지 30% 증가 버프 획득, 보급품은 맵 상에 2개까지만 존재 가능\n재사용 대기시간 : 60초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLCPBLE.png"
		),
		new SynergySkill(
			"빅 휴즈 기간틱 캐논볼",
			"매우 거대한 포탄을 발사한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 아래 방향키와 함께 사용하면 가지고 있는 모든 포탄을 한 번에 발사할 수 있다.\n감속 모드에서는 포탄이 몬스터에게 충돌할 때 비행 속도가 반감된다.\n감속 모드 온오프 : 마우스 우클릭",
			"MP 500 소비, 일정 시간마다 최대 15명의 적에게 1860% 데미지로 5번 공격하는 충돌이 발생하는 거대 포탄 발사\n한명의 적에게는 최대 25번까지만 충돌 발생\n거대 포탄은 25초 마다 1개씩 준비되며 최대 3개까지 준비 가능\n재사용 대기시간 : 0.50초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLCPBMI.png"
		)
	);

	IncreaseVolume increaseVolume = IncreaseVolume.builder()
		.plus_str(60)
		.plus_dex(60)
		.plus_int(60)
		.plus_luk(60)
		.plus_hp(1000)
		.multiply_str(1.0)
		.multiply_dex(1.0)
		.multiply_int(1.0)
		.multiply_luk(1.0)
		.multiply_hp(1.0)
		.multiply_ap_str(1.25)
		.multiply_ap_dex(1.25)
		.multiply_ap_int(1.25)
		.multiply_ap_luk(1.25)
		.multiply_ap_hp(1.25)
		.plus_attack_power(0)
		.plus_magic_power(0)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(0)
		.plus_damage(30)
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
