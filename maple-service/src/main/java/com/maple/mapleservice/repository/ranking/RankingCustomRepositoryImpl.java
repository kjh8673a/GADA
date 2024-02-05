package com.maple.mapleservice.repository.ranking;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.maple.mapleservice.dto.response.Ranking.GuildCombatPowerRankingResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.maple.mapleservice.config.QuerydslConfig;
import com.maple.mapleservice.dto.response.Ranking.CharacterCombatPowerRankingResponseDto;
import com.maple.mapleservice.dto.response.Ranking.GuildCombatPowerRankingResponseDto;
import static com.maple.mapleservice.entity.QCharacter.*;
import static com.maple.mapleservice.entity.QGuild.*;

import com.maple.mapleservice.service.character.CharacterApiService;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.querydsl.jpa.sql.JPASQLQuery;
import com.querydsl.sql.SQLExpressions;
import com.querydsl.sql.SQLTemplates;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
@RequiredArgsConstructor
public class RankingCustomRepositoryImpl implements RankingCustomRepository {
	private final CharacterApiService characterApiService;

	private final JdbcTemplate jdbcTemplate;
	private final QuerydslConfig querydslConfig;

	private final SQLTemplates sqlTemplates;

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public Page<CharacterCombatPowerRankingResponseDto> getCombatPowerRanking(String worldName, String characterClass, Pageable pageable) {
		List<CharacterCombatPowerRankingResponseDto> content = getCharacterCombatPowerRankingResponseDto(worldName, characterClass, pageable);

		Long count = getCount(worldName, characterClass);

		return new PageImpl<>(content, pageable, count);
	}

	@Override
	public Page<GuildCombatPowerRankingResponseDto> getGuildCombatPowerRanking(String worldName, Pageable pageable) {

		List<GuildCombatPowerRankingResponseDto> content = getGuildCombatPowerRankingResponseDto(worldName, pageable);

		Long count = getGuildCount(worldName);

		return new PageImpl<>(content, pageable, count);
	}

	private List<CharacterCombatPowerRankingResponseDto> getCharacterCombatPowerRankingResponseDto(String worldName, String characterClass, Pageable pageable) {
		log.info("offset : " + pageable.getOffset());
		log.info("page size : " + pageable.getPageSize());
		log.info("worldName : " + worldName);
		log.info("characterClass : " + characterClass);

		JPASQLQuery<?> query = new JPASQLQuery<>(em, sqlTemplates);
		List<CharacterCombatPowerRankingResponseDto> content = query
			.select(Projections.constructor(CharacterCombatPowerRankingResponseDto.class,
				Expressions.asNumber(SQLExpressions.rank().over().orderBy(character.combat_power.desc())),
				character.ocid,
				character.world_name,
				character.character_name,
				character.combat_power,
				character.guild_name,
				character.oguild_id,
				character.character_class,
				character.character_level,
				character.character_image
				))
			.from(character)
			.where(
				worldNameEq(worldName),
				characterClassEq(characterClass)
			)
			.offset(pageable.getOffset())
			.limit(pageable.getPageSize())
			.fetch();

		log.info("content size : " + content.size());
		return content;
	}

	private List<GuildCombatPowerRankingResponseDto> getGuildCombatPowerRankingResponseDto(String worldName, Pageable pageable){

		JPASQLQuery<?> query = new JPASQLQuery<>(em, sqlTemplates);

        return query
				.select(Projections.constructor(GuildCombatPowerRankingResponseDto.class,
						Expressions.asNumber(SQLExpressions.rank().over().orderBy(guild.combatPower.desc())),
						guild.oguildId,
						guild.name,
						guild.worldName,
						guild.masterName,
						guild.level,
						guild.combatPower
						))
				.from(guild)
				.where(guildWorldNameEq(worldName))
				.orderBy(guild.combatPower.desc())
				.offset(pageable.getOffset())
				.limit(pageable.getPageSize())
				.fetch();
	}

	private Long getCount(String worldName, String characterClass) {
		JPAQueryFactory query = querydslConfig.jpaQueryFactory();
		Long count = query
			.select(character.count())
			.from(character)
			.where(
				worldNameEq(worldName),
				characterClassEq(characterClass)
			)
			.fetchOne();

		log.info("count : " + count);
		return count;
	}

	private Long getGuildCount(String worldName){
		JPAQueryFactory query = querydslConfig.jpaQueryFactory();
		return query
				.select(guild.count())
				.from(guild)
				.where(guildWorldNameEq(worldName))
				.fetchOne();
	}

	private BooleanExpression characterClassEq(String characterClass) {
		log.info("EQ : characterClass : " + characterClass);
		return StringUtils.hasText(characterClass) ? character.character_class.eq(characterClass) : null;
	}

	private BooleanExpression worldNameEq(String worldName) {
		log.info("EQ : worldName : " + worldName);
		return StringUtils.hasText(worldName) ? character.world_name.eq(worldName) : null;
	}

	private BooleanExpression guildWorldNameEq(String worldName){
		return StringUtils.hasText(worldName) ? guild.worldName.eq(worldName) : null;
	}

	/**
	 * 캐릭터 전투력 새로 조회하여 바꿔주기
	 * @param ocidsToBeUpdated
	 */
	@Override
	public void combatPowerBatchUpdate(List<String> ocidsToBeUpdated) {
		String sql = "UPDATE characters SET combat_power = ? WHERE ocid = ?";

		jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				String ocid = ocidsToBeUpdated.get(i);

				ps.setLong(1, characterApiService.getCharacterCombatPower(ocid));
				ps.setString(2, ocid);
			}

			@Override
			public int getBatchSize() {
				return ocidsToBeUpdated.size();
			}
		});
	}
}
