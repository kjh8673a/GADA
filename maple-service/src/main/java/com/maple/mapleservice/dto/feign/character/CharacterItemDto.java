package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.entity.character.item.ItemEquipment;
import com.maple.mapleservice.entity.character.item.ItemTitle;
import lombok.Data;

import java.util.List;

@Data
public class CharacterItemDto {
    List<ItemEquipment> item_equipment;
    ItemTitle title;
}
