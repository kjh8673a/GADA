package com.maple.mapleservice.service.character;

import com.maple.mapleservice.dto.feign.character.*;
import com.maple.mapleservice.dto.model.character.FinalStat;
import com.maple.mapleservice.dto.model.character.HyperStat;
import com.maple.mapleservice.dto.model.character.stats.CharacterFinalStatDto;
import com.maple.mapleservice.dto.model.character.stats.CharacterHyperStatsDto;
import com.maple.mapleservice.exception.CustomException;
import com.maple.mapleservice.exception.ErrorCode;
import com.maple.mapleservice.feign.CharacterFeignClient;
import com.maple.mapleservice.feign.OcidFeignClient;
import com.maple.mapleservice.util.CommonUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class CharacterApiServiceImpl implements CharacterApiService {
    private final OcidFeignClient ocidFeignClient;
    private final CharacterFeignClient characterFeignClient;

    private CommonUtil commonUtil = new CommonUtil();

    @Override
    @Cacheable(value = "character-api-ocid", key = "#characterName")
    public String getOcidKey(String characterName) {
        String ocid = "";
        try {
            ocid = ocidFeignClient.getOcidDTO(characterName).getOcid();
            if (ocid == null || ocid.isBlank()) {
                throw new CustomException(ErrorCode.OCID_NOT_FOUND);
            }
        }catch (Exception e) {
            e.printStackTrace();
            log.error("Exception ERROR: {} ", e.getMessage());
        }

        return ocid;
    }

    @Override
    @Cacheable(value = "character-api-basic", key = "#ocid")
    public CharacterBasicDto getCharacterBasic(String ocid) {
        return characterFeignClient.getCharacterBasicDto(ocid, commonUtil.date);
    }

    @Override
    @Cacheable(value = "character-api-popularity", key = "#ocid")
    public Integer getCharacterPopularity(String ocid) {
        return characterFeignClient.getCharacterPopularityDto(ocid, commonUtil.date).getPopularity();
    }

    @Override
    @Cacheable(value = "character-api-final-stat", key = "#ocid")
    public CharacterFinalStatDto getCharacterStat(String ocid) {
        List<FinalStat> finalStats = characterFeignClient.getCharacterStatDto(ocid, commonUtil.date).getFinal_stat();

        CharacterFinalStatDto characterFinalStatDto = new CharacterFinalStatDto();
        for(FinalStat finalStat : finalStats) {
            switch (finalStat.getStat_name()) {
                case "최소 스탯공격력":
                    characterFinalStatDto.setMin_stat_power(finalStat.getStat_value());
                    break;
                case "최대 스탯공격력":
                    characterFinalStatDto.setMax_stat_power(finalStat.getStat_value());
                    break;
                case "데미지":
                    characterFinalStatDto.setDamage(finalStat.getStat_value());
                    break;
                case "보스 몬스터 데미지":
                    characterFinalStatDto.setBoss_damage(finalStat.getStat_value());
                    break;
                case "최종 데미지":
                    characterFinalStatDto.setFinal_damage(finalStat.getStat_value());
                    break;
                case "방어율 무시":
                    characterFinalStatDto.setIgnore_monster_armor(finalStat.getStat_value());
                    break;
                case "크리티컬 확률":
                    characterFinalStatDto.setCritical_rate(finalStat.getStat_value());
                    break;
                case "크리티컬 데미지":
                    characterFinalStatDto.setCritical_damage(finalStat.getStat_value());
                    break;
                case "상태이상 내성":
                    characterFinalStatDto.setStatus_resistance(finalStat.getStat_value());
                    break;
                case "스탠스":
                    characterFinalStatDto.setKnockback_resistance(finalStat.getStat_value());
                    break;
                case "방어력":
                    characterFinalStatDto.setDeffense(finalStat.getStat_value());
                    break;
                case "이동속도":
                    characterFinalStatDto.setSpeed(finalStat.getStat_value());
                    break;
                case "점프력":
                    characterFinalStatDto.setJump(finalStat.getStat_value());
                    break;
                case "스타포스":
                    characterFinalStatDto.setStar_force(finalStat.getStat_value());
                    break;
                case "아케인포스":
                    characterFinalStatDto.setArcane_force(finalStat.getStat_value());
                    break;
                case "어센틱포스":
                    characterFinalStatDto.setAuthentic_force(finalStat.getStat_value());
                    break;
                case "STR":
                    characterFinalStatDto.setMax_str(finalStat.getStat_value());
                    break;
                case "DEX":
                    characterFinalStatDto.setMax_dex(finalStat.getStat_value());
                    break;
                case "INT":
                    characterFinalStatDto.setMax_int(finalStat.getStat_value());
                    break;
                case "LUK":
                    characterFinalStatDto.setMax_luk(finalStat.getStat_value());
                    break;
                case "HP":
                    characterFinalStatDto.setMax_hp(finalStat.getStat_value());
                    break;
                case "MP":
                    characterFinalStatDto.setMax_mp(finalStat.getStat_value());
                    break;
                case "AP 배분 STR":
                    characterFinalStatDto.setAp_increased_str(finalStat.getStat_value());
                    break;
                case "AP 배분 DEX":
                    characterFinalStatDto.setAp_increased_dex(finalStat.getStat_value());
                    break;
                case "AP 배분 INT":
                    characterFinalStatDto.setAp_increased_int(finalStat.getStat_value());
                    break;
                case "AP 배분 LUK":
                    characterFinalStatDto.setAp_increased_luk(finalStat.getStat_value());
                    break;
                case "AP 배분 HP":
                    characterFinalStatDto.setAp_increased_hp(finalStat.getStat_value());
                    break;
                case "AP 배분 MP":
                    characterFinalStatDto.setAp_increased_mp(finalStat.getStat_value());
                    break;
                case "아이템 드롭률":
                    characterFinalStatDto.setItem_drop_rate(finalStat.getStat_value());
                    break;
                case "메소 획득량":
                    characterFinalStatDto.setMesos_obtained(finalStat.getStat_value());
                    break;
                case "버프 지속시간":
                    characterFinalStatDto.setBuff_duration(finalStat.getStat_value());
                    break;
                case "공격 속도":
                    characterFinalStatDto.setAttack_speed(finalStat.getStat_value());
                    break;
                case "일반 몬스터 데미지":
                    characterFinalStatDto.setNormal_monster_damage(finalStat.getStat_value());
                    break;
                case "재사용 대기시간 감소 (초)":
                    characterFinalStatDto.setDecrease_cooldowns_second(finalStat.getStat_value());
                    break;
                case "재사용 대기시간 감소 (%)":
                    characterFinalStatDto.setDecrease_cooldowns_percent(finalStat.getStat_value());
                    break;
                case "재사용 대기시간 미적용":
                    characterFinalStatDto.setSkip_cooldowns(finalStat.getStat_value());
                    break;
                case "속성 내성 무시":
                    characterFinalStatDto.setIgnore_status_tolerance(finalStat.getStat_value());
                    break;
                case "상태이상 추가 데미지":
                    characterFinalStatDto.setStatus_bonus_damage(finalStat.getStat_value());
                    break;
                case "무기 숙련도":
                    characterFinalStatDto.setWeapon_proficiency(finalStat.getStat_value());
                    break;
                case "추가 경험치 획득":
                    characterFinalStatDto.setBonus_exp(finalStat.getStat_value());
                    break;
                case "공격력":
                    characterFinalStatDto.setAttack_power(finalStat.getStat_value());
                    break;
                case "마력":
                    characterFinalStatDto.setMagic_power(finalStat.getStat_value());
                    break;
                case "전투력":
                    characterFinalStatDto.setCombat_power(finalStat.getStat_value());
                    break;
                case "소환수 지속시간 증가":
                    characterFinalStatDto.setSummon_duration(finalStat.getStat_value());
                    break;
            }
        }

        return characterFinalStatDto;
    }

    @Override
    @Cacheable(value = "character-api-hyper-stat", key = "#ocid")
    public CharacterHyperStatsDto getCharacterHyperStat(String ocid) {
        List<HyperStat> hyperStats = getSelectedHyperStat(ocid);

        CharacterHyperStatsDto characterHyperStatsDto = new CharacterHyperStatsDto();
        for(HyperStat hyperStat : hyperStats) {
            switch (hyperStat.getStat_type()) {
                case "STR":
                    characterHyperStatsDto.setMax_str(hyperStat);
                    break;
                case "DEX":
                    characterHyperStatsDto.setMax_dex(hyperStat);
                    break;
                case "INT":
                    characterHyperStatsDto.setMax_int(hyperStat);
                    break;
                case "LUK":
                    characterHyperStatsDto.setMax_luk(hyperStat);
                    break;
                case "HP":
                    characterHyperStatsDto.setMax_hp(hyperStat);
                    break;
                case "MP":
                    characterHyperStatsDto.setMax_mp(hyperStat);
                    break;
                case "DF/TF/PP":
                    characterHyperStatsDto.setMax_df_tf_pp(hyperStat);
                    break;
                case "크리티컬 확률":
                    characterHyperStatsDto.setCritical_rate(hyperStat);
                    break;
                case "크리티컬 데미지":
                    characterHyperStatsDto.setCritical_damage(hyperStat);
                    break;
                case "방어율 무시":
                    characterHyperStatsDto.setIgnore_monster_armor(hyperStat);
                    break;
                case "데미지":
                    characterHyperStatsDto.setDamage(hyperStat);
                    break;
                case "보스 몬스터 공격 시 데미지 증가":
                    characterHyperStatsDto.setBoss_damage(hyperStat);
                    break;
                case "상태 이상 내성":
                    characterHyperStatsDto.setStatus_resistance(hyperStat);
                    break;
                case "공격력/마력":
                    characterHyperStatsDto.setAttack_magic_power(hyperStat);
                    break;
                case "획득 경험치":
                    characterHyperStatsDto.setBonus_exp(hyperStat);
                    break;
                case "아케인포스":
                    characterHyperStatsDto.setArcane_force(hyperStat);
                    break;
                case "일반 몬스터 공격 시 데미지 증가":
                    characterHyperStatsDto.setNormal_monster_damage(hyperStat);
                    break;
            }
        }

        return characterHyperStatsDto;
    }

    public List<HyperStat> getSelectedHyperStat(String ocid) {
        CharacterHyperStatDto characterHyperStatDto = characterFeignClient.getCharacterHyperStatDto(ocid, commonUtil.date);
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
    }

    @Override
    @Cacheable(value = "character-api-ability", key = "#ocid")
    public CharacterAbilityDto getCharacterAbility(String ocid) {
        return characterFeignClient.getCharacterAbilityDto(ocid, commonUtil.date);
    }

    @Override
    @Cacheable(value = "character-api-item", key = "#ocid")
    public CharacterItemDto getCharacterItem(String ocid) {
        return characterFeignClient.getCharacterItemDto(ocid, commonUtil.date);
    }

    @Override
    @Cacheable(value = "character-api-cashitem", key = "#ocid")
    public CharacterCashItemDto getCharacterCashItem(String ocid) {
        return characterFeignClient.getCharacterCashItemDto(ocid, commonUtil.date);
    }

    @Override
    @Cacheable(value = "character-api-symbol", key = "#ocid")
    public CharacterSymbolDto getCharacterSymbol(String ocid) {
        return characterFeignClient.getCharacterSymbolDto(ocid, commonUtil.date);
    }

    @Override
    @Cacheable(value = "character-api-pet", key = "#ocid")
    public CharacterPetDto getCharacterPet(String ocid) {
        return characterFeignClient.getCharacterPetDto(ocid, commonUtil.date);
    }

    @Override
    public CharacterBasicDto getCharacterBasicCustomDate(String ocid, String date) {
        return characterFeignClient.getCharacterBasicDto(ocid, date);
    }

    @Override
    @Cacheable(value = "character-api-vmatrix", key = "#ocid")
    public CharacterVMatrixDto getCharacterVMatrixDto(String ocid) {
        return characterFeignClient.getCharacterVMatrixDto(ocid, commonUtil.date);
    }

    @Override
    @Cacheable(value = "character-api-hyper-passive", key = "#ocid + #character_skill_grade")
    public CharacterSkillDto getCharacterSkill(String ocid, String character_skill_grade) {
        return characterFeignClient.getCharacterSkillDto(ocid, commonUtil.date, character_skill_grade);
    }

    @Override
    @Cacheable(value = "character-api-link-skill", key = "#ocid")
    public CharacterLinkSkillDto getCharacterLinkSkill(String ocid) {
        return characterFeignClient.getCharacterLinkSkillDto(ocid, commonUtil.date);
    }

    @Override
    @Cacheable(value = "character-api-hexa-matrix", key = "#ocid")
    public CharacterHexaMatrixDto getCharacterHexaMatrix(String ocid) {
        return characterFeignClient.getCharacterHexaMatrixDto(ocid, commonUtil.date);
    }

}
