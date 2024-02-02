package com.maple.mapleservice.dto.model.synergy;

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
	int ap_str;
	int ap_dex;
	int ap_int;
	int ap_luk;
	int ap_hp;
	double ap_str_rate;
	double ap_dex_rate;
	double ap_int_rate;
	double ap_luk_rate;
	double ap_hp_rate;
	int attack_power;
	int magic_power;
	double boss_damage;
	double damage;
	double final_damage;
	double critical_damage;
	double status_damage;
}
