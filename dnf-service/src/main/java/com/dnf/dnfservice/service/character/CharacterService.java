package com.dnf.dnfservice.service.character;

import java.util.List;

import com.dnf.dnfservice.dto.response.character.CharacterAvatarResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBasicInfoResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBuffAvatarResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBuffCreatureResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBuffEquipmentResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterCreatureResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterEquipmentResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterFlagResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterInformationResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterSearchResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterSkillResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterStatResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterTalismanResponseDto;

public interface CharacterService {
	List<CharacterSearchResponseDto> searchCharacters(String characterName);

	CharacterInformationResponseDto getCharacterInformation(String serverName, String characterName);

	void removeCharacterInformation(String serverName, String characterName);

	CharacterBasicInfoResponseDto getCharacterBasicInfo(String serverName, String characterName);

	CharacterStatResponseDto getCharacterStat(String serverId, String characterId);

	CharacterEquipmentResponseDto getCharacterEquipment(String serverId, String characterId);

	void addCharacterViewCount(String serverName, String characterName);

	CharacterBuffEquipmentResponseDto getCharacterBuffEquipment(String serverId, String characterId);

	CharacterBuffAvatarResponseDto getCharacterBuffAvatar(String serverId, String characterId);

	CharacterBuffCreatureResponseDto getCharacterBuffCreature(String serverId, String characterId);

	CharacterSkillResponseDto getCharacterSkill(String serverId, String characterId);

	CharacterAvatarResponseDto getCharacterAvatar(String serverId, String characterId);

	CharacterCreatureResponseDto getCharacterCreature(String serverId, String characterId);

	CharacterFlagResponseDto getCharacterFlag(String serverId, String characterId);

	CharacterTalismanResponseDto getCharacterTalisman(String serverId, String characterId);
}
