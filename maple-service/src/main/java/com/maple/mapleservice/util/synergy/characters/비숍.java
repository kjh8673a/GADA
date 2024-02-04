package com.maple.mapleservice.util.synergy.characters;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.StatWeightForCalculate;
import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.dto.model.synergy.IncreaseVolume;

import lombok.Getter;

@Getter
public class 비숍 {
	String character_class = "비숍";
	Integer cycle = 0;
	List<String> skill_type = List.of("힐", "딜상승", "상태 이상 해제", "드롭률", "생존", "공격 속도");
	List<SynergySkill> skill_desc = List.of(
		new SynergySkill(
			"힐",
			"[자애] 주위에 있는 자신을 포함한 파티원 전원의 HP를 회복시키고 그 수에 따라 힐의 재사용 대기시간을 감소시킨다. 스킬 범위 안에 있는 언데드 몬스터는 추가로 데미지를 입는다.",
			"MP 24 소비, 회복력 300%, 회복시킨 파티원 1명마다 힐의 재사용 대기시간 2초 감소\\n재사용 대기시간 4초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIHPBMC.png"
		),
		new SynergySkill(
			"홀리 파운틴",
			"[자애] 성스러운 분수를 소환하여 성스러운 힘으로 파티원의 HP를 회복시킨다. 언데드 상태의 파티원도 사용 가능하며 분수에 다가가서 위쪽 화살표 키를 누르면 회복할 수 있다. 재사용 대기시간 초기화, 회복 스킬 효율 증가의 영향을 받지 않고 포탈 가까이에는 소환할 수 없으며 소환수 지속시간 증가의 효과를 받지 않는다.",
			"MP 40 소비, 사용 시 HP 40% 회복, 총 20번 사용 가능, 유지 시간 60초. 재사용 대기시간 60초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIGPBNB.png"
		),
		new SynergySkill(
			"디스펠",
			"[자애] 판정 범위 내에 적의 마법효과를 무효화 함과 동시에 자신을 포함한 주변 파티원들의 일부 상태 이상을 치료하고 디스펠과 디바인 프로텍션의 재사용 대기시간을 감소시킨다. 디스펠은 기절과 매혹, 혼란과 언데드화를 포함하여 치명적인 상태 이상을 해제할 수 있다.\\n파티원에 적용된 상태 이상 이펙트의 스킬 이펙트 투명도 적용 온오프 : 마우스 우클릭",
			"MP 10 소비, 100% 확률로 마법 무효화 및 상태 이상 치료 후 치료한 파티원 1명마다 디스펠의 재사용 대기시간 4초 감소\\n치료한 파티원이 1명이라도 있을 경우 디바인 프로텍션의 재사용 대기시간 6초 감소\\n재사용 대기시간 8초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIGPBMB.png"
		),
		new SynergySkill(
			"홀리 심볼",
			"일정 시간 동안 주변 파티원이 몬스터를 사냥할 때 더 많은 경험치를 획득할 수 있다. 단, 홀리 심볼을 시전한 캐릭터 근처를 벗어나면 효율이 반감된다.\\n필요 스킬 : 디스펠 3레벨 이상",
			"MP 300 소비, 240초 동안 파티 전원의 획득 경험치 50% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIGPBMD.png"
		),
		new SynergySkill(
			"홀리 매직쉘",
			"스킬 사용 시 자신을 포함한 파티원의 HP를 일정 비율 회복시켜주며 일정 시간 동안 모든 피해를 방어하는 성스러운 보호막을 걸어준다. 보호막은 일정 시간 동안 유지되나 버프 지속시간 증가의 효과를 받지 않는다. 한 번 발동되면 홀리 매직쉘을 다시 사용해도 일정 시간 동안 재생성되지 않는다.",
			"MP 70 소비, 최대 HP의 50% 회복, 15초 동안 마법의 보호막 생성. 보호막이 유지되는 동안 최대 15번의 피해를 방어\\n최대 HP의 일정 비율로 피해를 입히는 공격에 피격 시 10% 피해 감소\\n발동 시 80초 동안 보호막 재생성 및 홀리 매직쉘으로 회복 불가. 재사용 대기시간 90초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIGPBMJ.png"
		),
		new SynergySkill(
			"엔젤레이",
			"성령의 기운으로 충만한 성검을 소환하여 전방을 향해 발사한다. 성검은 최대 HP가 가장 높은 적을 향해 유도된다. 성검에 적중한 적은 공격에 취약해진다. 언데드나 악마 계열의 몬스터에게 큰 피해를 줄 수 있으며 파티원의 경우 HP를 회복시킨다. 언데드 상태의 파티원도 회복시킬 수 있다.",
			"MP 56 소비, 최대 1명의 적을 225% 데미지로 14번 공격하고 나를 포함한 파티원의 HP를 최대 HP의 10% 만큼 회복\\n엔젤레이에 적중한 적에게 20초 동안 아군의 최종 데미지 2% 증가하는 디버프 적용, 디버프는 최대 5번 중첩 가능하며 중첩된 최종 데미지끼리는 합적용",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIFPBMH.png"
		),
		new SynergySkill(
			"홀리 워터",
			"[자애] 엔젤레이를 적에 적중시킬 때마다 적의 피를 정화한 성수를 얻는다. 스킬을 사용하면 주변에 성수로 가득 찬 성배를 소환한다. 파티원이 성배에서 위 방향키를 사용하면 성수를 흡수하여 HP가 회복된다.",
			"패시브 효과 : 엔젤레이 7번 적중 시 성수 1개 획득, 성수는 최대 5개까지 획득 가능\\r\\n액티브 효과 : MP 100 소비, 성수 최소 1개 필요, 획득한 성수를 모두 소모하여 주변에 성수 생성, 성수를 소환할 공간이 충분하지 않으면 일부만 생성\\n성수는 5초 동안 유지되며 지능 2500 당 지속시간 5초 증가\\n성수에서 파티원이 위 방향키 사용 시 최대 HP의 5%를 회복하며 지능 2500 당 회복량 5% 증가, 회복량은 합 적용\\n지속시간이 남아있으나 성수가 소멸했다면 소멸한 성수 개수의 50%만큼 성수 획득\\n재사용 대기시간 10초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIFPBNF.png"
		),
		new SynergySkill(
			"리저렉션",
			"성스러운 빛으로 파티원을 되살린다. 부활 후 무적 및 데미지 증가 효과는 버프 지속시간 증가 효과가 적용되지 않는다.\\n재사용 대기시간 초기화의 효과를 받지 않는다.",
			"MP 150 소비, 범위 내 사망한 파티원 전원 부활 후 8초 동안 무적\\n데스 카운트가 있는 맵에서 리저렉션으로 부활한 경우 비숍과 부활한 파티원은 30초 동안 데미지 5% 증가, 지능 2500 당 데미지 증가량 1% 증가, 최대 25%까지 증가 가능\\n재사용 대기시간 210초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIFPBMG.png"
		),
		new SynergySkill(
			"어드밴스드 블레스",
			"일정 시간 동안 주변 파티원들의 공격력, 마력, 방어력, 최대 HP, 최대 MP를 크게 높여주며, 스킬 사용 시 소비되는 MP의 양을 감소시켜 준다. 블레스를 제외한 다른 모든 버프 스킬과 중복으로 사용할 수 있다.\\n필요 스킬 : 블레스 10레벨 이상",
			"MP 52 소비, 240초 동안 공격력 30, 마력 30, 방어력 550, 최대 HP 750, 최대 MP 750 증가, MP 소비량 20% 감소",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIFPBMF.png"
		),
		new SynergySkill(
			"홀리 심볼-엑스트라 드롭",
			"홀리 심볼 사용 시 드롭률을 증가시킨다. 단, 홀리 심볼을 시전한 캐릭터 근처를 벗어나면 적용되지 않는다.",
			"드롭률 30% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIFOBII.png"
		),
		new SynergySkill(
			"어드밴스드 블레스-보너스 데미지",
			"어드밴스드 블레스로 오르는 공격력 및 마력을 추가로 증가시킨다.",
			"공격력 및 마력 20 추가 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIFOBIJ.png"
		),
		new SynergySkill(
			"어드밴스드 블레스-보스 킬러",
			"어드밴스드 블레스 사용 시 보스 몬스터 공격 시 데미지를 증가시킨다.",
			"보스 몬스터 공격 시 데미지 10% 증가",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIFOBJA.png"
		),
		new SynergySkill(
			"헤븐즈 도어",
			"천국의 문을 열어 적을 응징함과 동시에 파티원에게 생명의 축복을 내린다.\\n효과를 받은 파티원은 일정 시간 동안 헤븐즈 도어의 효과를 다시 받을 수 없다.",
			"MP 500 소비. 최대 15명의 적을 670% 데미지로 8번 공격함과 동시에 주위 파티원에게 HP가 0이 되는 것을 한 번 무시하는 버프 지급. \\n재사용 대기시간 60초\\n버프를 받은 파티원은 600초 동안 헤븐즈 도어의 버프를 다시 받을 수 없음.",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KFPAIFPBJC.png"
		),
		new SynergySkill(
			"프레이",
			"기도를 통해 성스러운 축복 영역을 만들어 낸다. 프레이 사용 중에는 다른 비숍의 프레이 효과를 받을 수 없다. 프레이 사용 후 일정 시간 안에 스킬을 다시 사용하여 지속시간과 재사용 대기시간을 감소시킬 수 있다. 커스텀 커맨드를 사용하면 스킬을 재사용하지 않고 사용 즉시 감소된 지속시간과 재사용 대기시간이 적용된다.\\n커스텀 커맨드 온오프 : 마우스 우클릭",
			"MP 1000 소비, 45초 동안 영역 안의 자신을 포함한 파티원의 최종 데미지 5% 증가\\n자신을 제외한 파티원들은 일정 시간마다 최대 HP/MP의 1% 회복 및 일부 상태 이상 해제, 공격 속도 증가\\n지능 2500당 최종 데미지 증가량 1% 증가, 최대 45%까지 증가 가능\\n지능 2000당 HP/MP 회복량 1% 증가, 최대 10%까지 증가 가능\\n지능 10000당 공격 속도 1단계 증가, 최대 3단계까지 증가 가능\\n사용 후 5초 이내에 스킬 재사용 시 지속시간 15초 감소, 재사용 대기시간 60초 감소\\n재사용 대기시간 : 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLFPBMD.png"
		),
		new SynergySkill(
			"엔젤 오브 리브라",
			"자애와 복수의 천사를 소환한다. 천사는 바하뮤트와 동시에 사용할 수 없다. 복수의 천사는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 공격할 수 있는 범위 내에서 최대 HP가 높은 보스 몬스터를 우선 공격한다. 엔젤 오브 리브라 사용 후 일정 시간 안에 스킬을 다시 사용하여 지속시간과 재사용 대기시간을 감소시킬 수 있다. 커스텀 커맨드를 사용하면 스킬을 재사용하지 않고 사용 즉시 감소된 지속시간과 재사용 대기시간이 적용된다.\\n커스텀 커맨드 온오프 : 마우스 우클릭",
			"MP 1000 소비. 40초 동안 자애와 복수의 천사 소환\\n사용 후 5초 이내에 스킬 재사용 시 지속시간 10초 감소, 재사용 대기시간 60초 감소\\n자애의 천사 : 5초마다 파티원의 최대 HP를 16% 회복시키고 데미지를 4초 동안 5% + 지능 1250 당 1% 증가시키는 버프 사용, 데미지는 최대 100%까지 증가 가능\\n복수의 천사 : 최대 12명의 적을 1100%의 데미지로 10번 공격, 공격 당한 적은 60초 동안 천사의 표식이 생기고 적이 자신 및 파티원에게 성 속성 공격을 당할 때 표식이 사라지며 받는 최종 데미지 10% 증가\\n재사용 대기시간 180초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLFPBPC.png"
		),
		new SynergySkill(
			"피스메이커",
			"신성한 힘이 담긴 오브제를 전방으로 날려 보낸다. 오브제는 접촉한 적은 공격하고 파티원은 HP를 회복시킨다.\\n오브제가 소멸할 때 신성한 빛으로 변하며 주변 적을 공격하고 파티원들에게 버프를 준다. 스킬을 한 번 더 사용하면 즉시 소멸시킬 수 있다.\\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.",
			"MP 350 소비, 일정 시간마다 최대 6명의 적을 770% 데미지로 4번 공격하거나 오브제에 접촉한 자신을 포함한 파티원의 HP를 비숍 최대 HP의 45% 만큼 회복\\n최대 접촉 횟수 12회, 공격과 회복 모두 접촉 횟수 소모\\n신성한 빛 : 최대 15명의 적을 770%의 데미지로 12번 공격, 비숍과 빛에 닿은 파티원은 8초 동안 11% + 남은 접촉 횟수마다 1%의 데미지가 증가하는 버프를 받음\\n재사용 대기시간 10초",
			"https://open.api.nexon.com/static/maplestory/SkillIcon/KBPCLFPBLA.png"
		)
	);

	IncreaseVolume increaseVolume = IncreaseVolume.builder()
		.plus_str(0)
		.plus_dex(0)
		.plus_int(0)
		.plus_luk(0)
		.plus_hp(750)
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
		.plus_attack_power(50)
		.plus_magic_power(50)
		.multiply_attack_power(1.0)
		.multiply_magic_power(1.0)
		.plus_boss_damage(10)
		.plus_damage(136)
		.plus_final_damage(15)
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
