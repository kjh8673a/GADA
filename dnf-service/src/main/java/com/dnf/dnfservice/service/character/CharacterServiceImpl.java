package com.dnf.dnfservice.service.character;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.model.character.CharacterSearchInfo;
import com.dnf.dnfservice.dto.response.character.CharacterBasicInfoResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterSearchResponseDto;
import com.dnf.dnfservice.repository.character.CharactersRepository;
import com.dnf.dnfservice.util.ServerTable;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService {
	private final CharacterApiService characterApiService;
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
}
