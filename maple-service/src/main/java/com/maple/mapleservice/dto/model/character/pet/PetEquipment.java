package com.maple.mapleservice.dto.model.character.pet;

import com.maple.mapleservice.dto.model.character.cashitem.CashItemOption;
import lombok.Getter;

import java.util.List;

@Getter
public class PetEquipment {
    String item_name;
    String item_icon;
    String item_description;
    List<CashItemOption> item_option;
    Integer scroll_upgrade;
    Integer scroll_upgradeable;
}
