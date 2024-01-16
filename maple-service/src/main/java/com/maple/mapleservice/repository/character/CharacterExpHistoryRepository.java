package com.maple.mapleservice.repository.character;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.maple.mapleservice.dto.response.Character.CharacterExpHistoryResponseDto;
import com.maple.mapleservice.entity.CharacterExpHistory;

public interface CharacterExpHistoryRepository extends JpaRepository<CharacterExpHistory, String> {
	Long countByOcid(String ocid);

	@Query(value = "select c from CharacterExpHistory c where c.ocid = :ocid order by c.date desc limit 7")
	List<CharacterExpHistoryResponseDto> getExpHistory(String ocid);

	@Query(value = "select c.date from CharacterExpHistory c where c.ocid = :ocid order by c.date desc limit 1")
	String getLatestExpDate(String ocid);

	@Query(value = "select distinct c.ocid from CharacterExpHistory c")
	List<String> findDistinctOcidInExpHistory();

	@Query(value = "select c.id from CharacterExpHistory c where c.ocid = :ocid and c.id not in :numbers")
	List<Long> findNumbersToBeDeleted(String ocid, List<Long> numbers);

	@Query(value = "select c.id from CharacterExpHistory c where c.ocid = :ocid order by c.date desc limit 7")
	List<Long> findNumbersToBeRemained(String ocid);
}