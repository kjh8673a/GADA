package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.dto.model.character.item.ItemEquipment;
import com.maple.mapleservice.dto.model.character.item.ItemTitle;
import lombok.Data;

import java.util.List;

@Data
public class CharacterItemDto {
    List<ItemEquipment> item_equipment;
    ItemTitle title;
}
