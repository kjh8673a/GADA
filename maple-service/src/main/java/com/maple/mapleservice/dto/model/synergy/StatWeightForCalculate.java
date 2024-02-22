package com.maple.mapleservice.dto.model.synergy;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class StatWeightForCalculate {
	Double rate_str;
	Double rate_dex;
	Double rate_int;
	Double rate_luk;
	Double rate_hp;

	Double rate_attack_power;
	Double rate_magic_power;
}
