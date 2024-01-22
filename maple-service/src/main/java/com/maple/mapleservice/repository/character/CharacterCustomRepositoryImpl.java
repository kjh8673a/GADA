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
	private final CharacterApiService characterApiService;
	private final GuildApiService guildApiService;

	private final JdbcTemplate jdbcTemplate;
	private CommonUtil commonUtil = new CommonUtil();

	private final QuerydslConfig querydslConfig;

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

	/**
	 * 유니온 랭킹으로 가져온 캐릭터들 정보 넣기
	 * @param characterName
	 * @param parentOcid
	 * @param unionList
	 */
	@Override
	public void addChacterInformationToDbFromUnionRanking(String characterName, String parentOcid,
		List<Union> unionList) {

		List<Union> unionListToBeAdded = unionList.stream()
			.filter(u -> isCharacterNotInDB(u.getCharacter_name()))
			.filter(u -> !u.getCharacter_name().equals(characterName))
			.filter(
				u -> characterApiService.getOcidKey(u.getCharacter_name()) != null && !characterApiService.getOcidKey(
					u.getCharacter_name()).isBlank())
			.collect(Collectors.toList());

		String sql =
			"INSERT INTO characters (ocid, date, world_name, character_name, combat_power, guild_name, parent_ocid, oguild_id, character_class, character_class_level, character_level, character_image) "
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				Union union = unionListToBeAdded.get(i);
				String ocid = characterApiService.getOcidKey(union.getCharacter_name());
				CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
				String combatPower = characterApiService.getCharacterStat(ocid).get("전투력");
				String oguildId = getOguildId(characterBasicDto.getCharacter_guild_name(),
					characterBasicDto.getWorld_name());

				ps.setString(1, ocid);
				ps.setString(2, commonUtil.date);
				ps.setString(3, characterBasicDto.getWorld_name());
				ps.setString(4, union.getCharacter_name());
				ps.setLong(5, Long.parseLong(combatPower));
				ps.setString(6, characterBasicDto.getCharacter_guild_name());
				ps.setString(7, parentOcid);
				ps.setString(8, oguildId);
				ps.setString(9, characterBasicDto.getCharacter_class());
				ps.setString(10, characterBasicDto.getCharacter_class_level());
				ps.setLong(11, Long.valueOf(characterBasicDto.getCharacter_level()));
				ps.setString(12, characterBasicDto.getCharacter_image());
			}

			@Override
			public int getBatchSize() {
				return unionListToBeAdded.size();
			}
		});
	}

	private boolean isCharacterNotInDB(String characterName) {
		JPAQueryFactory query = querydslConfig.jpaQueryFactory();
		return query.selectFrom(character).where(character.character_name.eq(characterName)).fetchFirst() == null;
	}

	/**
	 * 대표ocid변경될 경우 다른 캐릭터들도 바꿔주기
	 * @param ocid
	 * @param old_parent_ocid
	 * @param new_parent_ocid
	 */
	@Override
	public void updateParentOcid(String ocid, String old_parent_ocid, String new_parent_ocid) {
		List<Character> characterList = characterListFindByParentOcid(old_parent_ocid).stream()
			.filter(c -> c.getCharacter_name() != ocid)
			.collect(Collectors.toList());

		String sql = "UPDATE characters SET parent_ocid = ? WHERE ocid = ?";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				Character character = characterList.get(i);

				ps.setString(1, new_parent_ocid);
				ps.setString(2, character.getOcid());
			}

			@Override
			public int getBatchSize() {
				return characterList.size();
			}
		});
	}

	List<Character> characterListFindByParentOcid(String parent_ocid) {
		JPAQueryFactory query = querydslConfig.jpaQueryFactory();
		return query.selectFrom(character)
			.where(character.parent_ocid.eq(parent_ocid))
			.orderBy(character.character_level.desc())
			.fetch();
	}

	// 길드명 체크해서 oguildid가져오기
	public String getOguildId(String guildName, String worldName) {
		if (guildName == null || guildName.isBlank()) {
			return "";
		}
		return guildApiService.getOguildIdKey(guildName, worldName);
	}

}
