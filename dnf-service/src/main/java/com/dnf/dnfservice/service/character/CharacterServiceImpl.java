package com.dnf.dnfservice.service.character;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.response.character.CharacterSearchResponseDto;
import com.dnf.dnfservice.util.ServerTable;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService {
	private final CharacterApiService characterApiService;

	private ServerTable serverTable = new ServerTable();
	private final RedisTemplate redisTemplate;

	@Override
	public List<CharacterSearchResponseDto> searchCharacters(String characterName) {
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters(characterName);

		List<CharacterSearchResponseDto> characterSearchResponseDtos = new ArrayList<>();
		ValueOperations valueOperations = redisTemplate.opsForValue();
		characterSearchDto.getRows()
			.stream()
			.filter(data -> data.getFame() != null)
			.forEach(data -> {
					characterSearchResponseDtos.add(
						CharacterSearchResponseDto.of(data, serverTable.serverIdToName.get(data.getServerId())));
					String key = "characterNameToId::" + serverTable.serverIdToName.get(data.getServerId()) + "::" + data.getCharacterName();
					String value = data.getServerId() + "::" + data.getCharacterId();
					if (valueOperations.get(key) == null) {
						valueOperations.set(key, value, 5, TimeUnit.HOURS);
					}
				}
			);

		return characterSearchResponseDtos;
	}
}
