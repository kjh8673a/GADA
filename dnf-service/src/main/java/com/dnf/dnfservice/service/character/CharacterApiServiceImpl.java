package com.dnf.dnfservice.service.character;

import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.character.CharacterAvatarDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBuffAvatarDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBuffCreatureDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBuffEquipmentDto;
import com.dnf.dnfservice.dto.feign.character.CharacterCreatureDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentTraitDto;
import com.dnf.dnfservice.dto.feign.character.CharacterFlagDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSkillStyleDto;
import com.dnf.dnfservice.dto.feign.character.CharacterStatusDto;
import com.dnf.dnfservice.dto.feign.character.CharacterTalismanDto;
import com.dnf.dnfservice.feign.CharacterFeignClient;
import com.dnf.dnfservice.util.cache.RedisCacheable;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CharacterApiServiceImpl implements CharacterApiService {
	private final CharacterFeignClient characterFeignClient;

	@Override
	public CharacterSearchDto searchCharacters(String characterName) {
		if(characterName.length() == 1) {
			return characterFeignClient.searchCharacters("all", characterName, "match", 20);
		}
		return characterFeignClient.searchCharacters("all", characterName, "full", 20);
	}

	@Override
	@RedisCacheable(value = "character-api-search-characters", key = "#serverId + '_' + #characterName", expire = 600)
	public CharacterSearchDto searchCharacters(String serverId, String characterName) {
		return characterFeignClient.searchCharacters(serverId, characterName, "match", 20);
	}

	@Override
	public CharacterBasicInfoDto getCharacterBasicInfo(String serverId, String characterId) {
		return characterFeignClient.getCharacterBasicInfo(serverId, characterId);
	}

	@Override
	public CharacterStatusDto getCharacterStatus(String serverId, String characterId) {
		return characterFeignClient.getCharacterStatus(serverId, characterId);
	}

	@Override
	public CharacterEquipmentDto getCharacterEquipment(String serverId, String characterId) {
		return characterFeignClient.getCharacterEquipment(serverId, characterId);
	}

	@Override
	public CharacterEquipmentTraitDto getCharacterEquipmentTrait(String serverId, String characterId) {
		return characterFeignClient.getCharacterEquipmentTrait(serverId, characterId);
	}

	@Override
	public CharacterBuffEquipmentDto getCharacterBuffEquipment(String serverId, String characterId) {
		return characterFeignClient.getCharacterBuffEquipment(serverId, characterId);
	}

	@Override
	public CharacterBuffAvatarDto getCharacterBuffAvatar(String serverId, String characterId) {
		return characterFeignClient.getCharacterBuffAvatar(serverId, characterId);
	}

	@Override
	public CharacterBuffCreatureDto getCharacterBuffCreature(String serverId, String characterId) {
		return characterFeignClient.getCharacterBuffCreature(serverId, characterId);
	}

	@Override
	public CharacterSkillStyleDto getCharacterSkillStyle(String serverId, String characterId) {
		return characterFeignClient.getCharacterSkillStyle(serverId, characterId);
	}

	@Override
	public CharacterAvatarDto getCharacterAvatar(String serverId, String characterId) {
		return characterFeignClient.getCharacterAvatar(serverId, characterId);
	}

	@Override
	public CharacterCreatureDto getCharacterCreature(String serverId, String characterId) {
		return characterFeignClient.getCharacterCreature(serverId, characterId);
	}

	@Override
	public CharacterFlagDto getCharacterFlag(String serverId, String characterId) {
		return characterFeignClient.getCharacterFlag(serverId, characterId);
	}

	@Override
	public CharacterTalismanDto getCharacterTalisman(String serverId, String characterId) {
		return characterFeignClient.getCharacterTalisman(serverId, characterId);
	}
}
