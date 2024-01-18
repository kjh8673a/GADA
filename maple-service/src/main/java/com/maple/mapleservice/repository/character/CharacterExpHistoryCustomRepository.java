package com.maple.mapleservice.repository.character;

import java.util.List;

public interface CharacterExpHistoryCustomRepository {
	void expHistoryBatchDelete(List<Long> numbersToBeDeletedList);
}
