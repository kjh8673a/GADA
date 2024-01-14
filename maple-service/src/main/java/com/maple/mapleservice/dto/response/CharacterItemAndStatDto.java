package com.maple.mapleservice.dto.response;

import com.maple.mapleservice.dto.feign.character.CharacterAbilityDto;
import com.maple.mapleservice.dto.feign.character.CharacterCashItemDto;
import com.maple.mapleservice.dto.feign.character.CharacterItemDto;
import com.maple.mapleservice.dto.feign.character.CharacterPetDto;
import com.maple.mapleservice.dto.model.character.FinalStat;
import com.maple.mapleservice.dto.model.character.HyperStat;
import com.maple.mapleservice.dto.model.character.Symbol;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterItemAndStatDto {
    List<FinalStat> final_stats;
    List<HyperStat> hyper_stats;
    CharacterAbilityDto ability;
    CharacterItemDto item;
    CharacterCashItemDto cash_item;
    CharacterPetDto pet;
    List<Symbol> symbols;

    public static CharacterItemAndStatDto of(List<FinalStat> final_stats,
                                             List<HyperStat> hyper_stats,
                                             CharacterAbilityDto ability,
                                             CharacterItemDto item,
                                             CharacterCashItemDto cash_item,
                                             CharacterPetDto pet,
                                             List<Symbol> symbols) {
        return CharacterItemAndStatDto.builder()
                .final_stats(final_stats)
                .hyper_stats(hyper_stats)
                .ability(ability)
                .item(item)
                .cash_item(cash_item)
                .pet(pet)
                .symbols(symbols)
                .build();
    }
}
