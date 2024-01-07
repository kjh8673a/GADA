package com.maple.mapleservice.entity.character.pet;

import com.maple.mapleservice.entity.character.cashitem.CashItemOption;
import lombok.Data;

import java.util.List;

@Data
public class PetEquipment {
    String item_name;
    String item_icon;
    String item_description;
    List<CashItemOption> item_option;
    Integer scroll_upgrade;
    Integer scroll_upgradeable;
}
