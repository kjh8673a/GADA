package com.maple.mapleservice.dto.model.synergy;

import java.util.List;

import com.maple.mapleservice.util.synergy.SynergyCharacters;
import com.maple.mapleservice.util.synergy.WeaponConstant;

import lombok.Getter;

@Getter
public class SynergyCharacter {
	private WeaponConstant weaponConstant = new WeaponConstant();

	String character_class;
	Integer cycle;
	List<String> skill_type;
	List<SynergySkill> skill_desc;
	IncreaseVolume increase_volume;
	StatWeightForCalculate statWeightForCalculate;
	// STR+, DEX+, INT+, LUK+, STR%, DEX%, INT%, LUK%,
	// 공격력+, 마력+, 공격력%, 마력%,
	// 보스공격력, 데미지
	// 최종데미지, 크리티컬데미지

	// 직업별로 영향을 받는 가중치를 IncreaseVolume처럼 만들어서 applySkills 한것처럼 여기 가져와서 계산하자.

	public SynergyCharacter(String character_class, Integer cycle, List<String> skill_type,
		List<SynergySkill> skill_desc, IncreaseVolume increase_volume, StatWeightForCalculate statWeightForCalculate) {
		this.character_class = character_class;
		this.cycle = cycle;
		this.skill_type = skill_type;
		this.skill_desc = skill_desc;
		this.increase_volume = increase_volume;
		this.statWeightForCalculate = statWeightForCalculate;
	}

	// 시너지 스킬적용된 스탯 계산하기
	public StatsForSynergy applySkills(StatsForSynergy stats) {
		return StatsForSynergy.builder()
			.max_str(
				(int)Math.floor(stats.getMax_str() * increase_volume.getMultiply_str() + increase_volume.getPlus_str()))
			.max_dex(
				(int)Math.floor(stats.getMax_dex() * increase_volume.getMultiply_dex() + increase_volume.getPlus_dex()))
			.max_int(
				(int)Math.floor(stats.getMax_int() * increase_volume.getMultiply_int() + increase_volume.getPlus_int()))
			.max_luk(
				(int)Math.floor(stats.getMax_luk() * increase_volume.getMultiply_luk() + increase_volume.getPlus_luk()))
			.max_hp(
				(int)Math.floor(stats.getMax_hp() * increase_volume.getMultiply_hp() + increase_volume.getPlus_hp()))
			.attack_power((int)Math.floor(stats.getAttack_power() * increase_volume.getMultiply_attack_power()
				+ increase_volume.getPlus_attack_power()))
			.magic_power((int)Math.floor(stats.getMagic_power() * increase_volume.getMultiply_magic_power()
				+ increase_volume.getPlus_magic_power()))
			.boss_damage(stats.getBoss_damage() + increase_volume.getPlus_boss_damage())
			.damage(stats.getDamage() + increase_volume.getPlus_damage())
			.final_damage(stats.getFinal_damage() + increase_volume.getPlus_final_damage())
			.critical_damage(stats.getCritical_damage() + increase_volume.getPlus_critical_damage())
			.build();
	}

	// 전투력 계산하기
	public long calculateCombatPower(StatsForSynergy stats, EquipmentForSynergy options) {
		double a = (
			stats.getMax_str() * statWeightForCalculate.getRate_str()
				+ stats.getMax_dex() * statWeightForCalculate.getRate_dex()
				+ stats.getMax_int() * statWeightForCalculate.getRate_int()
				+ stats.getMax_luk() * statWeightForCalculate.getRate_luk()
				+ ((stats.getMax_hp() - options.getMax_hp_plus()) / (100 + options.getMax_hp_percent()) * 100)
				* statWeightForCalculate.getRate_hp()
		);
		if (statWeightForCalculate.getRate_hp() > 0) {
			a += 0.8 * (
				((stats.getMax_hp() - options.getMax_hp_plus()) / (100 + options.getMax_hp_percent()) * 100) / 100
					* options.getMax_hp_percent() + options.getMax_hp_percent());
		}
		a *= 0.01;

		double c = (1 + (stats.getDamage() + stats.getBoss_damage() + stats.getStatus_damage()) / 100);
		double d = (1 + stats.getFinal_damage() / 100);
		double e = (1.35 + stats.getCritical_damage() / 100);

		double b = Math.floor(
			(stats.getAttack_power() * statWeightForCalculate.getRate_attack_power() / (100
				+ options.getAttack_power_percent()) * 100
				+ stats.getMagic_power() * statWeightForCalculate.getRate_magic_power() / (100
				+ options.getMagic_power_percent()) * 100 + weaponConstant.getWeaponConstant(options.getWeapon_type(),
				options.getWeapon_level()))
				* (1 + options.getAttack_power_percent() * statWeightForCalculate.getRate_attack_power() / 100
				+ options.getMagic_power_percent() * statWeightForCalculate.getRate_magic_power() / 100));

		return (long)(a * b * c * d * e);
	}
}
