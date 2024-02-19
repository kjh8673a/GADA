package com.maple.mapleservice.repository.character;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.util.CommonUtil;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class CharacterExpHistoryCustomRepositoryImpl implements CharacterExpHistoryCustomRepository {

	private final JdbcTemplate jdbcTemplate;
	private CommonUtil commonUtil = new CommonUtil();

	/**
	 * 경험치 히스토리에 경험치 한번에 삽입
	 * @param ocid
	 * @param list
	 */
	@Override
	public void addExpHistoryFromList(String ocid, List<CharacterBasicDto> list) {
		String sql = "INSERT INTO character_exp_history (ocid, date, character_level, exp, character_exp_rate) VALUES (?, ?, ?, ?, ?)";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				CharacterBasicDto characterBasicDto = list.get(i);

				ps.setString(1, ocid);
				ps.setString(2, characterBasicDto.getCharacter_level() == 0 ? "2099-12-31" : commonUtil.customDate(i));
				ps.setLong(3, characterBasicDto.getCharacter_level());
				ps.setLong(4, characterBasicDto.getCharacter_exp());
				ps.setString(5, characterBasicDto.getCharacter_exp_rate());
			}

			@Override
			public int getBatchSize() {
				return list.size();
			}
		});
	}

	@Override
	public void expHistoryBatchDelete(List<Long> numbersToBeDeletedList) {
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
