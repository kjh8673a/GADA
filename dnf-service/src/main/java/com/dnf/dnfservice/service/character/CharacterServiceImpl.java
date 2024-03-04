package com.dnf.dnfservice.service.character;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentTraitDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.feign.character.CharacterStatusDto;
import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.model.character.CharacterSearchInfo;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentWithDetail;
import com.dnf.dnfservice.dto.response.character.CharacterBasicInfoResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBuffResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterEquipmentResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterInformationResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterSearchResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterStatResponseDto;
import com.dnf.dnfservice.repository.character.CharactersRepository;
import com.dnf.dnfservice.service.item.ItemApiService;
import com.dnf.dnfservice.util.ServerTable;
import com.dnf.dnfservice.util.cache.RedisCacheEvict;
import com.dnf.dnfservice.util.cache.RedisCacheable;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService {
	private final CharacterApiService characterApiService;
	private final ItemApiService itemApiService;

	private final CharactersRepository charactersRepository;

	private ServerTable serverTable = new ServerTable();
	private final RedisTemplate redisTemplate;

	@Override
	public List<CharacterSearchResponseDto> searchCharacters(String characterName) {
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters(characterName);

		List<CharacterSearchResponseDto> characterSearchResponseDtos = new ArrayList<>();
		characterSearchDto.getRows()
			.stream()
			.filter(data -> data.getFame() != null)
			.forEach(data -> {
					characterSearchResponseDtos.add(
						CharacterSearchResponseDto.of(data, serverTable.serverIdToName.get(data.getServerId())));
				}
			);

		return characterSearchResponseDtos;
	}

	@Override
	@RedisCacheable(value = "character-information", key = "#serverName + '_' + #characterName")
	public CharacterInformationResponseDto getCharacterInformation(String serverName, String characterName) {

		CharacterBasicInfoResponseDto characterBasicInfoResponseDto = getCharacterBasicInfo(serverName, characterName);
		CharacterStatResponseDto characterStatResponseDto = getCharacterStat(serverName, characterName);
		CharacterEquipmentResponseDto characterEquipmentResponseDto = getCharacterEquipment(serverName, characterName);

		return CharacterInformationResponseDto.of(characterBasicInfoResponseDto, characterStatResponseDto, characterEquipmentResponseDto);
	}

	@Override
	@RedisCacheEvict(value = "character-information", key = "#serverName + '_' + #characterName")
	public void removeCharacterInformation(String serverName, String characterName) {

	}

	@Override
	public CharacterBasicInfoResponseDto getCharacterBasicInfo(String serverName, String characterName) {
		String serverId = serverTable.serverNameToId.get(serverName);

		CharacterSearchInfo characterSearchInfo = characterApiService.searchCharacters(serverId, characterName)
			.getRows()
			.get(0);
		String characterId = characterSearchInfo.getCharacterId();

		CharacterBasicInfoDto characterBasicInfoDto = characterApiService.getCharacterBasicInfo(serverId, characterId);

		Long jobRanking = charactersRepository.getRankByjobAndFame(characterSearchInfo.getJobName(),
			characterSearchInfo.getFame());

		return CharacterBasicInfoResponseDto.of(characterSearchInfo, serverName, characterBasicInfoDto, jobRanking);
	}

	@Override
	public CharacterStatResponseDto getCharacterStat(String serverName, String characterName) {
		String serverId = serverTable.serverNameToId.get(serverName);

		CharacterSearchInfo characterSearchInfo = characterApiService.searchCharacters(serverId, characterName)
			.getRows()
			.get(0);
		String characterId = characterSearchInfo.getCharacterId();

		CharacterStatusDto characterStatusDto = characterApiService.getCharacterStatus(serverId, characterId);

		List<CharacterBuffResponseDto> buff = new ArrayList<>();
		characterStatusDto.getBuff().stream().forEach(data -> buff.add(CharacterBuffResponseDto.of(data)));

		return CharacterStatResponseDto.of(buff, characterStatusDto.getStatus());
	}

	@Override
	public CharacterEquipmentResponseDto getCharacterEquipment(String serverName, String characterName) {
		String serverId = serverTable.serverNameToId.get(serverName);

		CharacterSearchInfo characterSearchInfo = characterApiService.searchCharacters(serverId, characterName)
			.getRows()
			.get(0);
		String characterId = characterSearchInfo.getCharacterId();

		List<EquipmentWithDetail> equipment = new ArrayList<>();
		CharacterEquipmentDto characterEquipmentDto = characterApiService.getCharacterEquipment(serverId, characterId);
		characterEquipmentDto.getEquipment().stream().forEach(data -> {
			ItemDetailDto itemDetailDto = itemApiService.getItemDetail(data.getItemId());
			equipment.add(EquipmentWithDetail.of(data, itemDetailDto));
		});

		CharacterEquipmentTraitDto characterEquipmentTraitDto = characterApiService.getCharacterEquipmentTrait(serverId, characterId);


		return CharacterEquipmentResponseDto.of(equipment, characterEquipmentTraitDto.getEquipmentTrait());
	}
}
