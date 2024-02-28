package com.dnf.dnfservice.service.character;

import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.feign.CharacterFeignClient;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CharacterApiServiceImpl implements CharacterApiService {
	private final CharacterFeignClient characterFeignClient;

	@Override
	public CharacterSearchDto searchCharacters(String characterName) {
		return characterFeignClient.searchCharacters(characterName, "full");
	}
}
