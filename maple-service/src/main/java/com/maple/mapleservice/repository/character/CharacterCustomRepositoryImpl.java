package com.maple.mapleservice.repository.character;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.maple.mapleservice.config.QuerydslConfig;
import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.ranking.Union;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.service.character.CharacterApiService;
import com.maple.mapleservice.service.guild.GuildApiService;
import com.maple.mapleservice.util.CommonUtil;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.maple.mapleservice.entity.QCharacter.*;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class CharacterCustomRepositoryImpl implements CharacterCustomRepository {
	private final JdbcTemplate jdbcTemplate;
	private CommonUtil commonUtil = new CommonUtil();

	@Override
	public void batchCharacterInsert(List<Character> characterInsertList) {
		String sql =
			"INSERT INTO characters (ocid, date, world_name, character_name, combat_power, guild_name, parent_ocid, prev_name, oguild_id, character_class, character_class_level, character_level, character_image) "
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				Character character = characterInsertList.get(i);

				ps.setString(1, character.getOcid());
				ps.setString(2, character.getDate());
				ps.setString(3, character.getWorld_name());
				ps.setString(4, character.getCharacter_name());
				ps.setLong(5, character.getCombat_power());
				ps.setString(6, character.getGuild_name());
				ps.setString(7, character.getParent_ocid());
				ps.setString(8, character.getPrev_name());
				ps.setString(9, character.getOguild_id());
				ps.setString(10, character.getCharacter_class());
				ps.setString(11, character.getCharacter_class_level());
				ps.setLong(12, character.getCharacter_level());
				ps.setString(13, character.getCharacter_image());
			}

			@Override
			public int getBatchSize() {
				return characterInsertList.size();
			}
		});
	}

	@Override
	public void batchCharacterUpdate(List<Character> characterUpdateList) {
		String sql =
			"UPDATE characters SET date = ?, world_name = ?, character_name = ?, combat_power = ?, guild_name = ?, "
				+ "parent_ocid = ?, prev_name = ?, oguild_id = ?, character_class = ?, character_class_level = ?, "
				+ "character_level = ?, character_image = ? WHERE ocid = ?";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				Character character = characterUpdateList.get(i);

				ps.setString(1, character.getDate());
				ps.setString(2, character.getWorld_name());
				ps.setString(3, character.getCharacter_name());
				ps.setLong(4, character.getCombat_power());
				ps.setString(5, character.getGuild_name());
				ps.setString(6, character.getParent_ocid());
				ps.setString(7, character.getPrev_name());
				ps.setString(8, character.getOguild_id());
				ps.setString(9, character.getCharacter_class());
				ps.setString(10, character.getCharacter_class_level());
				ps.setLong(11, character.getCharacter_level());
				ps.setString(12, character.getCharacter_image());

				ps.setString(13, character.getOcid());
			}

			@Override
			public int getBatchSize() {
				return characterUpdateList.size();
			}
		});
	}

}
