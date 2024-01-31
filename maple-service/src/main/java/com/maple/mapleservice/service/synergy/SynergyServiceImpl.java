package com.maple.mapleservice.service.synergy;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.feign.character.CharacterItemDto;
import com.maple.mapleservice.dto.model.character.item.ItemEquipment;
import com.maple.mapleservice.dto.model.synergy.EquipmentForSynergy;
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
import com.maple.mapleservice.dto.model.synergy.StatsForSynergy;
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
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}

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

		// 아이템 가져오기
		CharacterItemDto characterItemDto = characterApiService.getCharacterItem(ocid);

		// hp+, hp%, 공격력%, 마력% 잠재옵션 가져오기
		EquipmentForSynergy equipmentOptions = getEquipmentOptionsForCalculate(characterItemDto.getItem_equipment());

		// 메인캐릭터 정보 가져오기
		String className = getCharacterClassName(characterBasicDto.getCharacter_class());
		alreadyInParty.add(className);
		SynergyCharacter mainCharacter = characters.get(className);

		// 자체 전투력 구하기
		Long gada_combat_power = mainCharacter.calculateCombatPower(mainCharacterStat, equipmentOptions);

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
		Long partyCombatPower = mainCharacter.calculateCombatPower(appliedStat, equipmentOptions);
		Long increased_combat_power = (long)Math.floor(
			(partyCombatPower - gada_combat_power) * ((double)combat_power / gada_combat_power));

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
			Long ifOptionSelectedCombatPower = mainCharacter.calculateCombatPower(ifOptionSelected, equipmentOptions);

			Long option_increased_combat_power = (long)Math.floor(
				(ifOptionSelectedCombatPower - partyCombatPower) * ((double)combat_power / gada_combat_power));

			log.info(characterClassName.name() + " : " + option_increased_combat_power);
			optionCharactersForDto.add(OptionCharacter.of(optionCharacter, option_increased_combat_power));
		}
		Collections.sort(optionCharactersForDto,
			((o1, o2) -> Long.compare(o2.getIncrease_combat_power(), o1.getIncrease_combat_power())));

		return SynergyResponseDto.of(mainCharacterForDto, selectedCharctersForDto, optionCharactersForDto);
	}

	// hp+, hp%, 공격력%, 마력% 잠재옵션 가져오기
	private EquipmentForSynergy getEquipmentOptionsForCalculate(List<ItemEquipment> itemEquipment) {
		double[] result = new double[4];
		String weapon_type = "";
		int weapon_level = 0;
		for (ItemEquipment item : itemEquipment) {
			if (item.getItem_equipment_slot().equals("무기")) {
				if(weapon_type.equals("태도")) {
					continue;
				}
				weapon_type = item.getItem_equipment_part().replace(" ", "");
				weapon_level = item.getItem_base_option().getBase_equipment_level();
				String soul = item.getSoul_option();
				if (soul.startsWith("최대 HP : +")) {
					soul = soul.replace("최대 HP : +", "");
					if (soul.endsWith("%")) {
						soul = soul.replace("%", "");
						result[1] += Double.valueOf(soul);
					} else {
						result[0] += Double.valueOf(soul);
					}
				} else if (soul.startsWith("공격력 : +")) {
					soul = soul.replace("공격력 : +", "");
					if (soul.endsWith("%")) {
						soul = soul.replace("%", "");
						result[2] += Double.valueOf(soul);
					}
				} else if (soul.startsWith("마력 : +")) {
					soul = soul.replace("마력 : +", "");
					if (soul.endsWith("%")) {
						soul = soul.replace("%", "");
						result[3] += Double.valueOf(soul);
					}
				}
				continue;
			}
			List<String> options = List.of(
				Optional.ofNullable(item.getPotential_option_1()).orElseGet(String::new),
				Optional.ofNullable(item.getPotential_option_2()).orElseGet(String::new),
				Optional.ofNullable(item.getPotential_option_3()).orElseGet(String::new),
				Optional.ofNullable(item.getAdditional_potential_option_1()).orElseGet(String::new),
				Optional.ofNullable(item.getAdditional_potential_option_2()).orElseGet(String::new),
				Optional.ofNullable(item.getAdditional_potential_option_3()).orElseGet(String::new)
			);

			for (String option : options) {
				if (option.startsWith("최대 HP : +")) {
					option = option.replace("최대 HP : +", "");
					if (option.endsWith("%")) {
						option = option.replace("%", "");
						result[1] += Double.valueOf(option);
					} else {
						result[0] += Double.valueOf(option);
					}
				} else if (option.startsWith("공격력 : +")) {
					option = option.replace("공격력 : +", "");
					if (option.endsWith("%")) {
						option = option.replace("%", "");
						result[2] += Double.valueOf(option);
					}
				} else if (option.startsWith("마력 : +")) {
					option = option.replace("마력 : +", "");
					if (option.endsWith("%")) {
						option = option.replace("%", "");
						result[3] += Double.valueOf(option);
					}
				}
			}
		}

		return EquipmentForSynergy.builder()
			.max_hp_plus(result[0])
			.max_hp_percent(result[1])
			.attack_power_percent(result[2])
			.magic_power_percent(result[3])
			.weapon_type(weapon_type)
			.weapon_level(weapon_level)
			.build();
	}

	private StatsForSynergy getStatsForSynergy(String ocid) {
		Map<String, String> stat = characterApiService.getCharacterStat(ocid);

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
