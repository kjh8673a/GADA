package com.dnf.dnfservice.repository.character;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.response.character.CharacterInformationResponseDto;
import com.dnf.dnfservice.service.character.CharacterApiService;
import com.dnf.dnfservice.util.ServerTable;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class CharacterCustomRepositoryImpl implements CharacterCustomRepository {
	private final CharacterApiService characterApiService;
	private final JdbcTemplate jdbcTemplate;
	private ServerTable serverTable = new ServerTable();

	@Override
	public void batchCharacterInsert(List<CharacterInformationResponseDto> characterInsertList) {
		String sql =
			"INSERT INTO characters (character_id, character_name, server_id, server_name, level, job_name, job_grow_name, adventure_name, guild_name, fame)"
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				CharacterInformationResponseDto character = characterInsertList.get(i);
				CharacterSearchDto characterSearchDto = characterApiService.searchCharacters(
					serverTable.serverNameToId.get(character.getBasic().getServerName()),
					character.getBasic().getCharacterName());

				ps.setString(1, characterSearchDto.getRows().get(0).getCharacterId());
				ps.setString(2, character.getBasic().getCharacterName());
				ps.setString(3, serverTable.serverNameToId.get(character.getBasic().getServerName()));
				ps.setString(4, character.getBasic().getServerName());
				ps.setLong(5, Long.valueOf(Optional.ofNullable(character.getBasic().getLevel()).orElseGet(() -> 0)));
				ps.setString(6, character.getBasic().getJobName());
				ps.setString(7, character.getBasic().getJobGrowName());
				ps.setString(8, character.getBasic().getAdventureName());
				ps.setString(9, character.getBasic().getGuildName());
				ps.setLong(10, Long.valueOf(Optional.ofNullable(character.getBasic().getFame()).orElseGet(() -> 0L)));
			}

			@Override
			public int getBatchSize() {
				return characterInsertList.size();
			}
		});
	}

	@Override
	public void batchCharacterUpdate(List<CharacterInformationResponseDto> characterUpdateList) {
		String sql = "UPDATE characters SET character_name = ?, server_id = ?, server_name = ?, level = ?, "
			+ "job_name = ?, job_grow_name = ?, adventure_name = ?, guild_name = ?, fame = ? "
			+ "WHERE character_id = ?";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				CharacterInformationResponseDto character = characterUpdateList.get(i);
				CharacterSearchDto characterSearchDto = characterApiService.searchCharacters(
					serverTable.serverNameToId.get(character.getBasic().getServerName()),
					character.getBasic().getCharacterName());

				ps.setString(1, character.getBasic().getCharacterName());
				ps.setString(2, serverTable.serverNameToId.get(character.getBasic().getServerName()));
				ps.setString(3, character.getBasic().getServerName());
				ps.setLong(4, Long.valueOf(Optional.ofNullable(character.getBasic().getLevel()).orElseGet(() -> 0)));
				ps.setString(5, character.getBasic().getJobName());
				ps.setString(6, character.getBasic().getJobGrowName());
				ps.setString(7, character.getBasic().getAdventureName());
				ps.setString(8, character.getBasic().getGuildName());
				ps.setLong(9, Long.valueOf(Optional.ofNullable(character.getBasic().getFame()).orElseGet(() -> 0L)));

				ps.setString(10, characterSearchDto.getRows().get(0).getCharacterId());
			}

			@Override
			public int getBatchSize() {
				return characterUpdateList.size();
			}
		});
	}
}
