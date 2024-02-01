package com.maple.mapleservice.repository.character;

import java.util.List;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;

public interface CharacterExpHistoryCustomRepository {
	void addExpHistoryFromList(String ocid, List<CharacterBasicDto> list);

	void expHistoryBatchDelete(List<Long> numbersToBeDeletedList);
}
