package com.maple.mapleservice.service.character;

import com.maple.mapleservice.dto.feign.character.*;
import com.maple.mapleservice.dto.model.character.HyperStat;
import com.maple.mapleservice.feign.CharacterFeignClient;
import com.maple.mapleservice.feign.OcidFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CharacterApiServiceImpl implements CharacterApiService {
    private final OcidFeignClient ocidFeignClient;
    private final CharacterFeignClient characterFeignClient;
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private final String date = LocalDate.now().minusDays(1).format(formatter);

    @Override
    @Cacheable(value = "character-ocid", key = "#characterName")
    public String getOcidKey(String characterName) {
        return ocidFeignClient.getOcidDTO(characterName).getOcid();
    }

    @Override
    @Cacheable(value = "character-basic", key = "#ocid")
    public CharacterBasicDto getCharacterBasic(String ocid) {
        return characterFeignClient.getCharacterBasicDto(ocid, date);
    }

    @Override
    @Cacheable(value = "character-popularity", key = "#ocid")
    public Integer getCharacterPopularity(String ocid) {
        return characterFeignClient.getCharacterPopularityDto(ocid, date).getPopularity();
    }

    @Override
    @Cacheable(value = "character-stat", key = "#ocid")
    public CharacterStatDto getCharacterStat(String ocid) {
        return characterFeignClient.getCharacterStatDto(ocid, date);
    }

    @Override
    @Cacheable(value = "character-hyper-stat", key = "#ocid")
    public List<HyperStat> getCharacterHyperStat(String ocid) {
        CharacterHyperStatDto characterHyperStatDto = characterFeignClient.getCharacterHyperStatDto(ocid, date);
        switch (characterHyperStatDto.getUse_preset_no()) {
            case "1" -> {
                return characterHyperStatDto.getHyper_stat_preset_1();
            }
            case "2" -> {
                return characterHyperStatDto.getHyper_stat_preset_2();
            }
            case "3" -> {
                return characterHyperStatDto.getHyper_stat_preset_3();
            }
            default -> {
                return null;
            }
        }
        //깔끔하게 바꾸고싶음
    }

    @Override
    @Cacheable(value = "character-ability", key = "#ocid")
    public CharacterAbilityDto getCharacterAbility(String ocid) {
        return characterFeignClient.getCharacterAbilityDto(ocid, date);
    }

    @Override
    @Cacheable(value = "character-item", key = "#ocid")
    public CharacterItemDto getCharacterItem(String ocid) {
        return characterFeignClient.getCharacterItemDto(ocid, date);
    }

    @Override
    @Cacheable(value = "character-cashitem", key = "#ocid")
    public CharacterCashItemDto getCharacterCashItem(String ocid) {
        return characterFeignClient.getCharacterCashItemDto(ocid, date);
    }

    @Override
    @Cacheable(value = "character-symbol", key = "#ocid")
    public CharacterSymbolDto getCharacterSymbol(String ocid) {
        return characterFeignClient.getCharacterSymbolDto(ocid, date);
    }

    @Override
    @Cacheable(value = "character-pet", key = "#ocid")
    public CharacterPetDto getCharacterPet(String ocid) {
        return characterFeignClient.getCharacterPetDto(ocid, date);
    }

}
