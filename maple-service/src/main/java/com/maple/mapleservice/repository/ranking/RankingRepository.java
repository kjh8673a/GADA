package com.maple.mapleservice.repository.ranking;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.maple.mapleservice.entity.Character;

public interface RankingRepository extends JpaRepository<Character, Long>, RankingCustomRepository {

	@Query(value = "select c.ocid from Character c where c.world_name = :world_name order by c.combat_power desc limit 200")
	List<String> getTop200CombatPowerRankersByWorldName(@Param("world_name") String world_name);
}
