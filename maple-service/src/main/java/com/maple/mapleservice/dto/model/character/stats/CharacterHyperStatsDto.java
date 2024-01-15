package com.maple.mapleservice.dto.model.character.stats;

import com.maple.mapleservice.dto.model.character.HyperStat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CharacterHyperStatsDto {
	HyperStat max_str;
	HyperStat max_dex;
	HyperStat max_int;
	HyperStat max_luk;
	HyperStat max_hp;
	HyperStat max_mp;
	HyperStat max_df_tf_pp;
	HyperStat critical_rate;
	HyperStat critical_damage;
	HyperStat ignore_monster_armor;
	HyperStat damage;
	HyperStat boss_damage;
	HyperStat status_resistance;
	HyperStat attack_magic_power;
	HyperStat bonus_exp;
	HyperStat arcane_force;
	HyperStat normal_monster_damage;
}
