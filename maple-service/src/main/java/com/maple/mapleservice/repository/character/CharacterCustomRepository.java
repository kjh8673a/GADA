package com.maple.mapleservice.repository.character;

import java.util.List;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.ranking.Union;

public interface CharacterCustomRepository {
	void addExpHistoryFromList(String ocid, List<CharacterBasicDto> list);

	void addChacterInformationToDbFromUnionRanking(String characterName, String parentOcid,
		List<Union> unionList);

	void updateParentOcid(String ocid, String old_parent_ocid, String new_parent_ocid);

}
