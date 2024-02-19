package com.maple.mapleservice.dto.model.character.skill;

import lombok.Getter;

@Getter
public class HexaStatCore {
	String slot_id;
	String main_stat_name;
	String sub_stat_name_1;
	String sub_stat_name_2;
	int main_stat_level;
	int sub_stat_level_1;
	int sub_stat_level_2;
	int stat_grade;
}
