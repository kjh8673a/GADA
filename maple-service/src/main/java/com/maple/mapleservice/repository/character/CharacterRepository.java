package com.maple.mapleservice.repository.character;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.maple.mapleservice.entity.Character;

public interface CharacterRepository extends JpaRepository<Character, Long> {
	Character findByOcid(String ocid);

	@Query(value = "select c from Character c where c.parent_ocid = :ocid")
	List<Character> findByParentOcid(@Param("ocid") String ocid);

	@Query(value = "select c from Character c where c.character_name = :character_name")
	Character finndByCharacterName(@Param("character_name") String character_name);
}
