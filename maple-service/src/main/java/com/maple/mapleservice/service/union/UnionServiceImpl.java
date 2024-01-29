package com.maple.mapleservice.service.union;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.union.UnionArtifactDto;
import com.maple.mapleservice.dto.feign.union.UnionDto;
import com.maple.mapleservice.dto.feign.union.UnionRaiderDto;
import com.maple.mapleservice.dto.model.union.UnionArtifactCrystalWithImage;
import com.maple.mapleservice.dto.model.union.UnionBlock;
import com.maple.mapleservice.dto.response.union.UnionArtifactResponseDto;
import com.maple.mapleservice.dto.response.union.UnionInfoResponseDto;
import com.maple.mapleservice.service.character.CharacterApiService;
import com.maple.mapleservice.util.UnionRaidarStatTable;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UnionServiceImpl implements UnionService {
	private final UnionApiService unionApiService;
	private final CharacterApiService characterApiService;

	private UnionRaidarStatTable unionRaidarStatTable = new UnionRaidarStatTable();

	@Override
	@Cacheable(value = "union-info", key = "#characterName")
	public UnionInfoResponseDto getUnionInfoResponseDto(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		UnionDto unionDto = unionApiService.getUnionDto(ocid);
		UnionRaiderDto unionRaiderDto = unionApiService.getUnionRaiderDto(ocid);

		List<String> total_union_raider_stat = calculateUnionStats(unionRaiderDto.getUnion_raider_stat());

		List<UnionBlock> union_block = unionRaiderDto.getUnion_block();
		Collections.sort(union_block,
			((o1, o2) -> Integer.parseInt(o2.getBlock_level()) - Integer.parseInt(o1.getBlock_level())));

		return UnionInfoResponseDto.of(unionDto.getUnion_level(), unionDto.getUnion_grade(),
			unionRaiderDto.getUnion_raider_stat(), total_union_raider_stat, unionRaiderDto.getUnion_occupied_stat(),
			union_block, unionRaiderDto.getUnion_inner_stat());
	}

	@Override
	@Cacheable(value = "union-artifact", key = "#characterName")
	public UnionArtifactResponseDto getUnionArtifactResponseDto(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		UnionDto unionDto = unionApiService.getUnionDto(ocid);
		UnionArtifactDto unionArtifactDto = unionApiService.getUnionArtifactDto(ocid);

		List<UnionArtifactCrystalWithImage> union_artifact_crystal = new ArrayList<>();
		unionArtifactDto.getUnion_artifact_crystal().stream().forEach(u ->
			union_artifact_crystal.add(UnionArtifactCrystalWithImage.of(u))
		);

		return UnionArtifactResponseDto.of(unionDto.getArtifact_level(),
			unionArtifactDto.getUnion_artifact_effect(), union_artifact_crystal);
	}

	/**
	 * 스탯 합칠수있는거 더해주기
	 * @param statList
	 * @return
	 */
	private List<String> calculateUnionStats(List<String> statList) {
		Collections.sort(statList);
		String[][] union_raider_stat_table = unionRaidarStatTable.getUnion_raider_stat_table();

		List<String> total_stat = new ArrayList<>();

		int tableIndex = 0;
		int sumValue = 0;
		for (String stat : statList) {
			if (!stat.startsWith(union_raider_stat_table[tableIndex][0])) {
				if (sumValue > 0) {
					String caculatedValue = union_raider_stat_table[tableIndex][0] + String.valueOf(sumValue)
						+ union_raider_stat_table[tableIndex][1];
					total_stat.add(caculatedValue);
					sumValue = 0;
				}
			}

			while (!stat.startsWith(union_raider_stat_table[tableIndex][0])) {
				tableIndex++;
			}

			if (stat.startsWith(union_raider_stat_table[tableIndex][0])) {
				String[] splittedKeyArray = stat.split(" ");

				String valueToBeCalculated = "";
				for (int i = splittedKeyArray.length - 1; i >= 0; i--) {
					if (Character.isDigit(splittedKeyArray[i].charAt(0))) {
						valueToBeCalculated = splittedKeyArray[i];
						break;
					}
				}

				if (!Character.isDigit(valueToBeCalculated.charAt(valueToBeCalculated.length() - 1))) {
					valueToBeCalculated = valueToBeCalculated.substring(0, valueToBeCalculated.length() - 1);
				}

				sumValue += Integer.parseInt(valueToBeCalculated);
			}
		}

		if (sumValue > 0) {
			String caculatedValue = union_raider_stat_table[tableIndex][0] + String.valueOf(sumValue)
				+ union_raider_stat_table[tableIndex][1];
			total_stat.add(caculatedValue);
		}

		return total_stat;
	}
}
