package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.dto.model.character.pet.PetEquipment;
import lombok.Data;

import java.util.List;

@Data
public class CharacterPetDto {
    String pet_1_name;
    String pet_1_nickname;
    String pet_1_icon;
    String pet_1_description;
    PetEquipment pet_1_equipment;
    String pet_1_pet_type;
    List<String> pet_1_skill;
    String pet_1_date_expire;

    String pet_2_name;
    String pet_2_nickname;
    String pet_2_icon;
    String pet_2_description;
    PetEquipment pet_2_equipment;
    String pet_2_pet_type;
    List<String> pet_2_skill;
    String pet_2_date_expire;

    String pet_3_name;
    String pet_3_nickname;
    String pet_3_icon;
    String pet_3_description;
    PetEquipment pet_3_equipment;
    String pet_3_pet_type;
    List<String> pet_3_skill;
    String pet_3_date_expire;
}
