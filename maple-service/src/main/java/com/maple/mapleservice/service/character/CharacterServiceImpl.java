package com.maple.mapleservice.service.character;

import com.maple.mapleservice.dto.feign.character.*;
import com.maple.mapleservice.dto.model.character.FinalStat;
import com.maple.mapleservice.dto.model.character.HyperStat;
import com.maple.mapleservice.dto.model.character.Symbol;
import com.maple.mapleservice.dto.response.CharacterBasicInfoDto;
import com.maple.mapleservice.dto.response.CharacterItemAndStatDto;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService {
    private final CharacterApiService characterApiService;

    @Override
    @Cacheable(value = "character-basic-info", key = "#characterName")
    public CharacterBasicInfoDto getCharacterBasicInfo(String characterName) {
        String ocid = characterApiService.getOcidKey(characterName);
        CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
        Integer popularity = characterApiService.getCharacterPopularity(ocid);
        String characterCombatPower = characterApiService.getCharacterCombatPower(ocid);
        return CharacterBasicInfoDto.of(ocid, characterBasicDto, popularity, characterCombatPower);
    }

    @Override
    @Cacheable(value = "character-item-and-stat", key = "#characterName")
    public CharacterItemAndStatDto getCharacterItemAndStat(String characterName) {
        String ocid = characterApiService.getOcidKey(characterName);
        List<FinalStat> final_stats = characterApiService.getCharacterStat(ocid).getFinal_stat();
        List<HyperStat> hyper_stats = characterApiService.getCharacterHyperStat(ocid);
        CharacterAbilityDto ability = characterApiService.getCharacterAbility(ocid);
        CharacterItemDto item = characterApiService.getCharacterItem(ocid);
        CharacterCashItemDto cash_item = characterApiService.getCharacterCashItem(ocid);
        CharacterPetDto pet = characterApiService.getCharacterPet(ocid);
        List<Symbol> symbols = characterApiService.getCharacterSymbol(ocid).getSymbol();
        return CharacterItemAndStatDto.of(final_stats, hyper_stats, ability, item, cash_item, pet, symbols);
    }
}
