package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.dto.model.character.cashitem.CashItemEquipment;
import lombok.Data;
import java.util.List;

@Data
public class CharacterCashItemDto {
    String character_gender;
    String character_class;
    Integer preset_no;
    List<CashItemEquipment> cash_item_equipment_preset_1;
    List<CashItemEquipment> cash_item_equipment_preset_2;
    List<CashItemEquipment> cash_item_equipment_preset_3;
}
