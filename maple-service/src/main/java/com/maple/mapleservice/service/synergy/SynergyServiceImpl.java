package com.maple.mapleservice.service.synergy;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.synergy.MainCharacter;
import com.maple.mapleservice.dto.model.synergy.OptionCharacter;
import com.maple.mapleservice.dto.model.synergy.SelectedCharcter;
import com.maple.mapleservice.dto.request.PartySynergyRequestDto;
import com.maple.mapleservice.dto.response.synergy.SynergyResponseDto;
import com.maple.mapleservice.exception.CustomException;
import com.maple.mapleservice.exception.ErrorCode;
import com.maple.mapleservice.service.character.CharacterApiService;
import com.maple.mapleservice.util.CharacterClassName;
import com.maple.mapleservice.dto.model.synergy.SynergyCharacter;
import com.maple.mapleservice.util.synergy.StatsForSynergy;
import com.maple.mapleservice.util.synergy.SynergyCharacters;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class SynergyServiceImpl implements SynergyService {
	private final CharacterApiService characterApiService;

	private SynergyCharacters synergyCharacters = new SynergyCharacters();

	/**
	 * 파티 시너지
	 * @param partySynergyRequestDto
	 * @return
	 */
	@Override
	public SynergyResponseDto partySynergy(PartySynergyRequestDto partySynergyRequestDto) {
		String characterName = partySynergyRequestDto.getCharacterName();
		log.info("characterName : " + characterName);
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}
		log.info("ocid : " + ocid);

		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		if (Integer.parseInt(characterBasicDto.getCharacter_class_level()) < 5) {
			throw new CustomException(ErrorCode.INVALID_CLASS_LEVEL);
		}

		Map<String, SynergyCharacter> characters = synergyCharacters.getSynergyCharacters();
		List<String> alreadyInParty = new ArrayList<>();

		// 전투력
		Long combat_power = characterApiService.getCharacterCombatPower(ocid);

		// 스탯가져오기
		StatsForSynergy mainCharacterStat = getStatsForSynergy(ocid);

		// 메인캐릭터 정보 가져오기
		String className = getCharacterClassName(characterBasicDto.getCharacter_class());
		alreadyInParty.add(className);
		SynergyCharacter mainCharacter = characters.get(className);

		// response selected_characters
		List<SelectedCharcter> selectedCharctersForDto = new ArrayList<>();

		// 파티에 포함된 캐릭터들 스킬 적용하기
		StatsForSynergy appliedStat = mainCharacterStat;
		List<String> selectedCharacters = Optional.ofNullable(partySynergyRequestDto.getSelectedCharacters())
			.orElseGet(Collections::emptyList);
		for (String selectedClassName : selectedCharacters) {
			className = getCharacterClassName(selectedClassName);
			alreadyInParty.add(className);
			SynergyCharacter selectedCharacter = characters.get(className);
			appliedStat = selectedCharacter.applySkills(appliedStat);
			selectedCharctersForDto.add(SelectedCharcter.of(selectedCharacter));
		}
		Long increased_combat_power = calculateCombatPower(appliedStat, mainCharacterStat, combat_power);

		// response main_character
		MainCharacter mainCharacterForDto = MainCharacter.of(characterBasicDto, combat_power, increased_combat_power,
			mainCharacter);

		// response option_characters
		List<OptionCharacter> optionCharactersForDto = new ArrayList<>();

		// 옵션 캐릭터들 계산 -> 전투력증가량순으로 정렬
		for (CharacterClassName characterClassName : CharacterClassName.values()) {
			if (alreadyInParty.contains(characterClassName)) {
				continue;
			}

			SynergyCharacter optionCharacter = characters.get(characterClassName.name());
			StatsForSynergy ifOptionSelected = optionCharacter.applySkills(appliedStat);
			Long ifOptionSelectedCombatPower = calculateCombatPower(ifOptionSelected, appliedStat, combat_power);

			optionCharactersForDto.add(OptionCharacter.of(optionCharacter, ifOptionSelectedCombatPower));
		}
		Collections.sort(optionCharactersForDto,
			((o1, o2) -> Long.compare(o2.getIncrease_combat_power(), o1.getIncrease_combat_power())));

		return SynergyResponseDto.of(mainCharacterForDto, selectedCharctersForDto, optionCharactersForDto);
	}

	/**
	 * 전투력 증가량 계산하기
	 * @param appliedStat
	 * @param mainCharacterStat
	 * @param combatPower
	 * @return
	 */
	private Long calculateCombatPower(StatsForSynergy appliedStat, StatsForSynergy mainCharacterStat,
		Long combatPower) {

		double appliedSum =
			appliedStat.getMax_str() + appliedStat.getMax_dex() + appliedStat.getMax_int() + appliedStat.getMax_luk()
				+ appliedStat.getMax_hp() + appliedStat.getAttack_power() + appliedStat.getBoss_damage()
				+ appliedStat.getDamage() + appliedStat.getFinal_damage()
				+ appliedStat.getCritical_damage();

		double mainSum =
			mainCharacterStat.getMax_str() + mainCharacterStat.getMax_dex() + mainCharacterStat.getMax_int()
				+ mainCharacterStat.getMax_luk()
				+ mainCharacterStat.getMax_hp() + mainCharacterStat.getAttack_power()
				+ mainCharacterStat.getBoss_damage()
				+ mainCharacterStat.getDamage() + mainCharacterStat.getFinal_damage()
				+ mainCharacterStat.getCritical_damage();

		return (long)Math.floor(appliedSum - mainSum);
	}

	private StatsForSynergy getStatsForSynergy(String ocid) {
		Map<String, String> stat = characterApiService.getCharacterStat(ocid);
		// 공격력, 마력은 무보엠 공마따져서 계산해야함

		return StatsForSynergy.builder()
			.max_str(Integer.valueOf(stat.get("STR")))
			.max_dex(Integer.valueOf(stat.get("DEX")))
			.max_int(Integer.valueOf(stat.get("INT")))
			.max_luk(Integer.valueOf(stat.get("LUK")))
			.max_hp(Integer.valueOf(stat.get("HP")))
			.attack_power(Integer.valueOf(stat.get("공격력")))
			.magic_power(Integer.valueOf(stat.get("마력")))
			.boss_damage(Double.valueOf(stat.get("보스 몬스터 데미지")))
			.damage(Double.valueOf(stat.get("데미지")))
			.final_damage(Double.valueOf(stat.get("최종 데미지")))
			.critical_damage(Double.valueOf(stat.get("크리티컬 데미지")))
			.build();
	}

	public String getCharacterClassName(String characterClass) {
		String className = characterClass.replace(" ", "_");
		className = className.replace("(", "_");
		className = className.replace(",", "_");
		if (className.endsWith(")")) {
			className = className.substring(0, className.length() - 1);
		}

		return className;
	}
}
