package com.maple.mapleservice.util.synergy;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class StatsForSynergy {
	int max_str;
	int max_dex;
	int max_int;
	int max_luk;
	int max_hp;
	int attack_power;
	int magic_power;
	double boss_damage;
	double damage;
	double final_damage;
	double critical_damage;
}
