package com.maple.mapleservice.repository.character;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.maple.mapleservice.entity.Character;

public interface CharacterRepository extends JpaRepository<Character, Long>, CharacterCustomRepository {
	Character findByOcid(String ocid);

	@Query(value = "select c from Character c where c.parent_ocid = :ocid order by c.character_level desc ")
	List<Character> findByParentOcid(@Param("ocid") String ocid);

	@Query(value = "select c from Character c where c.character_name = :character_name")
	Character findByCharacterName(@Param("character_name") String character_name);

	@Query(value = "select c from Character c where c.oguild_id = :oguild_id and c.character_name in :character_names order by c.character_level desc")
	List<Character> getGuildMembersInfo(@Param("oguild_id") String oguild_id, List<String> character_names);

}
