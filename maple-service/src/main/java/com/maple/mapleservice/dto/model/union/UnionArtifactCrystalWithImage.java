package com.maple.mapleservice.dto.model.union;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UnionArtifactCrystalWithImage {
	String name;
	String validity_flag;
	String date_expire;
	int level;
	String crystal_option_name_1;
	String crystal_option_name_2;
	String crystal_option_name_3;
	String crystal_icon;

	public static UnionArtifactCrystalWithImage of(UnionArtifactCrystal u) {
		return UnionArtifactCrystalWithImage.builder()
			.name(u.getName())
			.validity_flag(u.getDate_expire())
			.date_expire(u.getDate_expire())
			.level(u.getLevel())
			.crystal_option_name_1(u.getCrystal_option_name_1())
			.crystal_option_name_2(u.getCrystal_option_name_2())
			.crystal_option_name_3(u.getCrystal_option_name_3())
			.crystal_icon("https://d2ehkq4zb63ju5.cloudfront.net/maplestory/asset/" + u.getName().replace(" : ", "_") + ".png")
			.build();
	}
}
