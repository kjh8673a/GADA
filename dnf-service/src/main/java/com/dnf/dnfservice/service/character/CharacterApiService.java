package com.dnf.dnfservice.service.character;

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

public interface CharacterApiService {
	CharacterSearchDto searchCharacters(String characterName);

	CharacterSearchDto searchCharacters(String serverId, String characterName);

	CharacterBasicInfoDto getCharacterBasicInfo(String serverId, String characterId);

	CharacterStatusDto getCharacterStatus(String serverId, String characterId);

	CharacterEquipmentDto getCharacterEquipment(String serverId, String characterId);

	CharacterEquipmentTraitDto getCharacterEquipmentTrait(String serverId, String characterId);

	CharacterBuffEquipmentDto getCharacterBuffEquipment(String serverId, String characterId);

	CharacterBuffAvatarDto getCharacterBuffAvatar(String serverId, String characterId);

	CharacterBuffCreatureDto getCharacterBuffCreature(String serverId, String characterId);

	CharacterSkillStyleDto getCharacterSkillStyle(String serverId, String characterId);

	CharacterAvatarDto getCharacterAvatar(String serverId, String characterId);

	CharacterCreatureDto getCharacterCreature(String serverId, String characterId);

	CharacterFlagDto getCharacterFlag(String serverId, String characterId);
}
