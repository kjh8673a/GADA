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

public interface CharacterService {
	List<CharacterSearchResponseDto> searchCharacters(String characterName);

	CharacterInformationResponseDto getCharacterInformation(String serverName, String characterName);

	void removeCharacterInformation(String serverName, String characterName);

	CharacterBasicInfoResponseDto getCharacterBasicInfo(String serverName, String characterName);

	CharacterStatResponseDto getCharacterStat(String serverName, String characterName);

	CharacterEquipmentResponseDto getCharacterEquipment(String serverName, String characterName);

	void addCharacterViewCount(String serverName, String characterName);

	CharacterBuffEquipmentResponseDto getCharacterBuffEquipment(String serverName, String characterName);

	CharacterBuffAvatarResponseDto getCharacterBuffAvatar(String serverName, String characterName);

	CharacterBuffCreatureResponseDto getCharacterBuffCreature(String serverName, String characterName);

	CharacterSkillResponseDto getCharacterSkill(String serverName, String characterName);

	CharacterAvatarResponseDto getCharacterAvatar(String serverName, String characterName);

	CharacterCreatureResponseDto getCharacterCreature(String serverName, String characterName);

	CharacterFlagResponseDto getCharacterFlag(String serverName, String characterName);
}
