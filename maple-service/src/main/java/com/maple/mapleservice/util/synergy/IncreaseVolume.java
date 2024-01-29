package com.maple.mapleservice.util.synergy;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class IncreaseVolume {
	// STR+, DEX+, INT+, LUK+, hp+, STR%, DEX%, INT%, LUK%, hp%,
	// 공격력+, 마력+, 공격력%, 마력%,
	// 보스공격력, 데미지
	// 최종데미지, 크리티컬데미지
	Integer plus_str;
	Integer plus_dex;
	Integer plus_int;
	Integer plus_luk;
	Integer plus_hp;
	Double multiply_str;
	Double multiply_dex;
	Double multiply_int;
	Double multiply_luk;
	Double multiply_hp;

	Integer plus_attack_power;
	Integer plus_magic_power;
	Double multiply_attack_power;
	Double multiply_magic_power;

	Integer plus_boss_damage;
	Integer plus_damage;

	Integer plus_final_damage;
	Integer plus_critical_damage;
}
