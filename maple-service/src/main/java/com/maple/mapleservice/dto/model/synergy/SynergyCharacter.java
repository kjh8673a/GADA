package com.maple.mapleservice.dto.model.synergy;

import java.util.List;

import com.maple.mapleservice.dto.model.synergy.SynergySkill;
import com.maple.mapleservice.util.synergy.IncreaseVolume;
import com.maple.mapleservice.util.synergy.StatsForSynergy;

import lombok.Getter;

@Getter
public class SynergyCharacter {
	String character_class;
	Integer cycle;
	List<String> skill_type;
	List<SynergySkill> skill_desc;
	IncreaseVolume increase_volume;
	// STR+, DEX+, INT+, LUK+, STR%, DEX%, INT%, LUK%,
	// 공격력+, 마력+, 공격력%, 마력%,
	// 보스공격력, 데미지
	// 최종데미지, 크리티컬데미지

	public SynergyCharacter(String character_class, Integer cycle, List<String> skill_type,
		List<SynergySkill> skill_desc, IncreaseVolume increase_volume) {
		this.character_class = character_class;
		this.cycle = cycle;
		this.skill_type = skill_type;
		this.skill_desc = skill_desc;
		this.increase_volume = increase_volume;
	}

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
}
