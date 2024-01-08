package com.maple.mapleservice.dto.model.character.item;

import lombok.Data;

@Data
public class ItemEquipment {
    String item_equipment_part;
    String item_equipment_slot;
    String item_name;
    String item_icon;
    String item_description;
    String item_shape_name;
    String item_shape_icon;
    String item_gender;
    String potential_option_grade;
    String additional_potential_option_grade;
    String potential_option_1;
    String potential_option_2;
    String potential_option_3;
    String additional_potential_option_1;
    String additional_potential_option_2;
    String additional_potential_option_3;
    Integer equipment_level_increase;
    Integer growth_exp;
    Integer growth_level;
    String scroll_upgrade;
    String cuttable_count;
    String golden_hammer_flag;
    String scroll_resilience_count;
    String scroll_upgradeable_count;
    String soul_name;
    String soul_option;
    String starforce;
    String starforce_scroll_flag;
    Integer special_ring_level;
    String date_expire;
    //options...
    ItemOption item_total_option;
    ItemOption item_base_option;
    ItemOption item_exceptional_option;
    ItemOption item_add_option;
    ItemOption item_etc_option;
    ItemOption item_starforce_option;
}
