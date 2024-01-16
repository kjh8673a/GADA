package com.maple.mapleservice.repository.character;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class CharacterExpHistoryCustomRepository {

	private final JdbcTemplate jdbcTemplate;

	public void batchDelete(List<Long> numbersToBeDeletedList) {
		String sql = "DELETE FROM character_exp_history WHERE id = ?";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				Long numberToBeDeleted = numbersToBeDeletedList.get(i);

				ps.setLong(1, numberToBeDeleted);
			}

			@Override
			public int getBatchSize() {
				return numbersToBeDeletedList.size();
			}
		});
	}
}
