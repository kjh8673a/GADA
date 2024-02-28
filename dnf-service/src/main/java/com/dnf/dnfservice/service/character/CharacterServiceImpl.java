package com.dnf.dnfservice.service.character;

import java.util.ArrayList;
import java.util.List;

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

	@Override
	public List<CharacterSearchResponseDto> searchCharacters(String characterName) {
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters(characterName);

		List<CharacterSearchResponseDto> characterSearchResponseDtos = new ArrayList<>();
		characterSearchDto.getRows()
			.stream()
			.filter(data -> data.getFame() != null)
			.forEach(data -> characterSearchResponseDtos.add(CharacterSearchResponseDto.of(data, serverTable.serverIdToName.get(data.getServerId()))));

		return characterSearchResponseDtos;
	}
}
