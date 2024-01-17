package com.maple.mapleservice.service.union;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.union.UnionDto;
import com.maple.mapleservice.dto.feign.union.UnionRaiderDto;
import com.maple.mapleservice.dto.response.union.UnionInfoResponseDto;
import com.maple.mapleservice.service.character.CharacterApiService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UnionServiceImpl implements UnionService {
	private final UnionApiService unionApiService;
	private final CharacterApiService characterApiService;

	@Override
	@Cacheable(value = "union-info", key = "#characterName")
	public UnionInfoResponseDto getUnionInfoResponseDto(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		UnionDto unionDto = unionApiService.getUnionDto(ocid);
		UnionRaiderDto unionRaiderDto = unionApiService.getUnionRaiderDto(ocid);

		List<String> total_union_raider_stat = calculateUnionStats(unionRaiderDto.getUnion_raider_stat());
		List<String> total_union_occupied_stat = calculateUnionStats((unionRaiderDto.getUnion_occupied_stat()));

		return UnionInfoResponseDto.of(unionDto.getUnion_level(), unionDto.getUnion_grade(),
			unionRaiderDto.getUnion_raider_stat(), total_union_raider_stat, unionRaiderDto.getUnion_occupied_stat(),
			total_union_occupied_stat, unionRaiderDto.getUnion_block(), unionRaiderDto.getUnion_inner_stat());
	}

	/**
	 * 스탯 합칠수있는거 더해주기
	 * @param statList
	 * @return
	 */
	private List<String> calculateUnionStats(List<String> statList) {
		Map<String, Integer> statMap = new HashMap<>();

		for (String stat : statList) {
			statMap.put(stat, statMap.getOrDefault(stat, 0) + 1);
		}

		List<String> total_stat = new ArrayList<>();
		for (Map.Entry<String, Integer> entry : statMap.entrySet()) {
			String key = entry.getKey();
			int value = entry.getValue();

			if (value == 1) {
				total_stat.add(key);
				continue;
			}

			String[] splittedKeyArray = key.split(" ");
			int indexToBeCaculated = 0;
			String valueToBeCalculated = "";
			for (int i = splittedKeyArray.length - 1; i >= 0; i--) {
				if (Character.isDigit(splittedKeyArray[i].charAt(0))) {
					indexToBeCaculated = i;
					valueToBeCalculated = splittedKeyArray[i];
					break;
				}
			}

			Character suffix = null;
			if (!Character.isDigit(valueToBeCalculated.charAt(valueToBeCalculated.length() - 1))) {
				suffix = valueToBeCalculated.charAt(valueToBeCalculated.length() - 1);
				valueToBeCalculated = valueToBeCalculated.substring(0, valueToBeCalculated.length() - 1);
			}

			String caculatedValue =
				String.valueOf(Integer.parseInt(valueToBeCalculated) * value)
					+ (suffix == null ? "" : String.valueOf(suffix));

			splittedKeyArray[indexToBeCaculated] = caculatedValue;

			String statToBeInserted = String.join(" ", splittedKeyArray);
			total_stat.add(statToBeInserted);
		}

		return total_stat;
	}
}
