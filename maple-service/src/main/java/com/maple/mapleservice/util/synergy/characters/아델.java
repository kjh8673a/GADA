package com.maple.mapleservice.util.synergy.characters;

import java.util.ArrayList;
import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 아델 {
	String character_class = "아델";
	Integer cycle = 3;
	List<String> skill_type = List.of("생존", "힐");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"노빌리티",
			"동료를 위해 자신을 희생하는 고결함을 발휘한다. 자신의 주위에 생성되는 영역 안에서 자신을 포함한 파티원이 입은 피해의 일부를 대신 받고 그에 비례해 실드를 생성한다.\\n버프 지속시간 증가와 버프 프리저의 효과를 받지 않고 스킬 재사용 시 즉시 취소된다.\\n5차 스킬 \\\"리스토어\\\"를 익히기 위해 10레벨 이상 필요",
			"MP 200 소비, 20초 동안 영역 생성\\n영역 안에서 파티원이 입은 피해의 30%를 대신 받고 해당 피해의 80%에 해당하는 실드 생성\\n남은 HP보다 대신 받는 피해가 많다면 받지 못함\\n재사용 대기시간 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KEKDKGPBMF.png"
		),
		new SynergySkill(
			"리스토어",
			"타버린 마력 회로를 일시적으로 복원해 과거의 마력 날개를 부활시킨다.\\n리스토어의 공격은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있고 스킬을 다시 사용하면 즉시 종료된다.\\n필요 스킬 : 노빌리티 10레벨 이상",
			"시전 및 시전 후 초당 최대 MP의 2% 소비\\n30초 동안 데미지 45%, 에테르 획득량 80%, 오더로 명령할 수 있는 에테르 소드 2개 증가\\n일정 시간마다 마력 날개를 펼쳐 최대 6명의 적을 1980%의 데미지로 3번 공격하고 자신을 포함한 파티원 최대 HP의 10.5% 회복\\n재사용 대기시간 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLGPAMJ.png"
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
