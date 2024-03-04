package com.dnf.dnfservice.repository.character;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dnf.dnfservice.entity.Characters;

public interface CharactersRepository extends JpaRepository<Characters, Long> {

	@Query(value = "select count(c) + 1 from Characters c where c.jobName = :jobName and c.fame > :fame")
	Long getRankByjobAndFame(String jobName, Long fame);
}
