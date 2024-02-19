package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 메르세데스 {
	String character_class = "메르세데스";
	Integer cycle = 3;
	List<String> skill_type = List.of("딜상승");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"유니콘 스파이크",
			"성스러운 유니콘을 소환해 전방의 적 다수를 동시에 공격하고 일정 시간 동안 약화시킨다. 약화된 대상은 모든 공격에 추가 피해를 받게 된다. 차지 드라이브, 스트라이크 듀얼샷, 레전드리 스피어, 라이트닝 엣지, 래쓰 오브 엔릴로 연계 가능하며 연계 스킬을 사용하면 재사용 대기시간이 1초씩 줄어든다.",
			"MP 62 소비, 최대 8명의 적을 345% 데미지로 6번 크리티컬 공격, 대상은 100% 확률로 60초 동안 데미지 30%의 추가 피해를 받는 디버프 효과 적용\n재사용 대기시간 9초\n연계 스킬 사용 시 재사용 대기시간 1초 감소",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNBKGPBMC.png"
		),
		new SynergySkill(
			"레전드리 스피어",
			"도약과 동시에 전설의 창을 떨어트려 전방의 적 다수를 공격한다. 대상의 방어율을 일정수준 감소시키는 효과와 함께 100% 크리티컬 판정으로 적중한다. 스킬 사용 중 적의 어떠한 공격에도 밀려나지 않는다. 추가로 리프 토네이도의 데미지를 영구적으로 증가시키는 패시브 효과가 있다. 리프 토네이도, 거스트 다이브, 롤링 문썰트, 래쓰 오브 엔릴과 연계 가능하며 연계 스킬을 사용하면 재사용 대기시간이 1초씩 줄어든다. \n필요 스킬 : 리프 토네이도 10레벨 이상",
			"MP 60 소비, 최대 12명의 적을 630%의 데미지로 4번 크리티컬 공격\n60초 동안 대상의 방어율 30% 감소 효과 적용\n재사용 대기시간 5초\n연계 스킬 사용 시 재사용 대기시간 1초 감소\n[패시브 효과 : 리프 토네이도 데미지 206%p 증가, 리프 토네이도 VI는 미적용]",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFNBKFPBMC.png"
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
		.plus_damage(30)
		.plus_final_damage(0)
		.plus_critical_damage(0)
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
