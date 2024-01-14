package com.maple.mapleservice.service.character;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.ranking.Union;
import com.maple.mapleservice.dto.response.Character.CharacterExpHistoryResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.entity.CharacterExpHistory;
import com.maple.mapleservice.repository.character.CharacterExpHistoryRepository;
import com.maple.mapleservice.exception.CustomException;
import com.maple.mapleservice.exception.ErrorCode;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.service.guild.GuildApiService;
import com.maple.mapleservice.service.ranking.RankingApiService;
import com.maple.mapleservice.util.CommonUtil;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService {
	private final CharacterApiService characterApiService;
	private final GuildApiService guildApiService;
	private final RankingApiService rankingApiService;

	private final CharacterRepository characterRepository;

	private final JdbcTemplate jdbcTemplate;

	private CommonUtil commonUtil = new CommonUtil();
	private final CharacterExpHistoryRepository characterExpHistoryRepository;

	/**
	 * 캐릭터 정보 DB에 입력
	 * @param characterName
	 */
	@Override
	public void addCharacterInformationToDB(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}

		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		String combatPower = characterApiService.getCharacterCombatPower(ocid);
		String oguildId = getOguildId(characterBasicDto.getCharacter_guild_name(), characterBasicDto.getWorld_name());

		List<Union> unionList = rankingApiService.getRankingUnion(ocid, characterBasicDto.getWorld_name());
		Collections.sort(unionList, (o1, o2) -> Long.compare(o2.getUnion_level(), o1.getUnion_level()));

		String parent_ocid = characterApiService.getOcidKey(unionList.get(0).getCharacter_name());

		// 유니온 랭킹으로 가져온 캐릭터들 정보 넣기
		addChacterInformationToDbFromUnionRanking(characterName, parent_ocid, unionList);

		Character character = characterRepository.findByOcid(ocid);
		if (character != null) {
			// 조회 기준일 같으면 갱신안함
			if (character.getDate().equals(commonUtil.date)) {
				return;
			}

			// 조회 기준일
			character.setDate(commonUtil.date);
			// 월드 명
			character.setWorld_name(characterBasicDto.getWorld_name());
			// 캐릭터 이름 + 이전 캐릭터 이름
			if (!character.getCharacter_name().equals(characterBasicDto.getCharacter_name())) {
				character.setPrev_name(character.getCharacter_name());
				character.setCharacter_name(characterBasicDto.getCharacter_name());
			}
			// 전투력
			character.setCombat_power(Long.parseLong(combatPower));
			// 길드명 + 길드식별자
			if (characterBasicDto.getCharacter_guild_name() != null && !characterBasicDto.getCharacter_guild_name()
				.equals(character.getGuild_name())) {
				character.setGuild_name(characterBasicDto.getCharacter_guild_name());
				character.setOguild_id(oguildId);
			}
			// 대표ocid
			if (!character.getParent_ocid().equals(parent_ocid)) {
				// 대표ocid변경될 경우 다른 캐릭터들도 바꿔주기 + 캐시 삭제
				deleteFindMainCharacterCache(character.getParent_ocid());
				updateParentOcid(ocid, character.getParent_ocid(), parent_ocid);
				character.setParent_ocid(parent_ocid);
			}

			// 직업 + 전직차수 + 레벨
			character.setCharacter_class(characterBasicDto.getCharacter_class());
			character.setCharacter_class_level(characterBasicDto.getCharacter_class_level());
			character.setCharacter_level(Long.valueOf(characterBasicDto.getCharacter_level()));

			// 캐릭터 이미지
			character.setCharacter_image(characterBasicDto.getCharacter_image());

			characterRepository.save(character);
		} else {
			Character characterForInsert = Character.builder()
				.ocid(ocid)
				.date(commonUtil.date)
				.world_name(characterBasicDto.getWorld_name())
				.character_name(characterBasicDto.getCharacter_name())
				.combat_power(Long.parseLong(combatPower))
				.guild_name(characterBasicDto.getCharacter_guild_name())
				.parent_ocid(parent_ocid)
				.oguild_id(oguildId)
				.character_class(characterBasicDto.getCharacter_class())
				.character_class_level(characterBasicDto.getCharacter_class_level())
				.character_level(Long.valueOf(characterBasicDto.getCharacter_level()))
				.character_image(characterBasicDto.getCharacter_image())
				.build();

			characterRepository.save(characterForInsert);

			deleteFindMainCharacterCache(parent_ocid);
		}
	}

	// 길드명 체크해서 oguildid가져오기
	public String getOguildId(String guildName, String worldName) {
		if (guildName == null || guildName.isBlank()) {
			return "";
		}
		return guildApiService.getOguildIdKey(guildName, worldName);
	}

	@Override
	@Cacheable(value = "character-information-from-DB", key = "#ocid")
	public CharacterResponseDto getCharacterFromDB(String ocid) {
		Character character = characterRepository.findByOcid(ocid);
		if (character == null) {
			throw new CustomException(ErrorCode.CHARACATER_NOT_FOUND);
		}

		return CharacterResponseDto.of(character);
	}

	/**
	 * 본캐 ocid 캐릭터이름으로 찾아오기
	 * @param characterName
	 * @return
	 */
	@Override
	public String getParentOcidByCharacterName(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		Character character = characterRepository.findByOcid(ocid);
		if (character == null) {
			throw new CustomException(ErrorCode.CHARACATER_NOT_FOUND);
		}
		String parentOcid = character.getParent_ocid();

		return parentOcid;
	}

	/**
	 * 본캐 찾기
	 * @param parentOcid
	 * @return
	 */
	@Override
	@Cacheable(value = "character-find-main-character", key = "#parentOcid")
	public List<CharacterResponseDto> findMainCharacter(String parentOcid) {

		return characterRepository.findByParentOcid(parentOcid).stream()
			.map(CharacterResponseDto::of)
			.collect(Collectors.toList());
	}

	/**
	 * DB 구축. 순수 캐릭터 정보만 넣기. 유니온, 본캐 정보 X
	 * @param characterName
	 */
	@Override
	public void addCharactersFromRanking(String characterName) {
		Character character = characterRepository.finndByCharacterName(characterName);
		if (character != null) {
			return;
		}

		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}

		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			return;
		}

		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		String combatPower = characterApiService.getCharacterCombatPower(ocid);
		String oguildId = getOguildId(characterBasicDto.getCharacter_guild_name(), characterBasicDto.getWorld_name());

		Character characterForInsert = Character.builder()
			.ocid(ocid)
			.date(commonUtil.date)
			.world_name(characterBasicDto.getWorld_name())
			.character_name(characterBasicDto.getCharacter_name())
			.combat_power(Long.parseLong(combatPower))
			.guild_name(characterBasicDto.getCharacter_guild_name())
			.parent_ocid(ocid)
			.oguild_id(oguildId)
			.character_class(characterBasicDto.getCharacter_class())
			.character_class_level(characterBasicDto.getCharacter_class_level())
			.character_level(Long.valueOf(characterBasicDto.getCharacter_level()))
			.character_image(characterBasicDto.getCharacter_image())
			.build();

		characterRepository.save(characterForInsert);
	}

	/**
	 * 경험치 히스토리 반환
	 * @param ocid
	 * @return
	 */
	@Override
	@Cacheable(value = "character-exp-history", key = "#ocid")
	public List<CharacterExpHistoryResponseDto> getCharacterExpHistory(String ocid) {
		long count = characterExpHistoryRepository.countByOcid(ocid);
		if (count == 0) {
			addCharacterExpHistoryFirstTime(ocid);
		}else if (!characterExpHistoryRepository.getLatestExpDate(ocid).equals(commonUtil.date)){
			addCharacterExpHistoryToday(ocid);
		}

		return characterExpHistoryRepository.getExpHistory(ocid);
	}

	private void addCharacterExpHistoryToday(String ocid) {
		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		CharacterExpHistory characterExpHistory = CharacterExpHistory.builder()
			.ocid(ocid)
			.date(commonUtil.date)
			.character_level(Long.valueOf(characterBasicDto.getCharacter_level()))
			.exp(characterBasicDto.getCharacter_exp())
			.character_exp_rate(characterBasicDto.getCharacter_exp_rate())
			.build();

		characterExpHistoryRepository.save(characterExpHistory);
	}

	public void addCharacterExpHistoryFirstTime(String ocid) {
		List<CharacterBasicDto> listForExp = new ArrayList<>();
		for (int i = 0; i < 7; i++) {
			CharacterBasicDto basicDto = characterApiService.getCharacterBasicCustomDate(ocid, commonUtil.customDate(i));
			if(basicDto.getCharacter_exp() == null) {
				CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
				characterBasicDto.setCharacter_level(0);
				characterBasicDto.setCharacter_exp(0L);
				characterBasicDto.setCharacter_exp_rate("0");
				listForExp.add(characterBasicDto);
			}else {
				listForExp.add(basicDto);
			}
		}
		addExpHistoryFromList(ocid, listForExp);
	}

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
	 * 본캐찾기 캐시에서 삭제
	 * @param parentOcid
	 */
	@CacheEvict(value = "character-find-main-character", key = "#parentOcid")
	public void deleteFindMainCharacterCache(String parentOcid) {
	}

	/**
	 * 유니온 랭킹으로 가져온 캐릭터들 정보 넣기
	 * @param characterName
	 * @param parentOcid
	 * @param unionList
	 */
	public void addChacterInformationToDbFromUnionRanking(String characterName, String parentOcid,
		List<Union> unionList) {
		List<Union> unionListToBeAdded = unionList.stream()
			.filter(u -> characterRepository.finndByCharacterName(u.getCharacter_name()) == null)
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
				String combatPower = characterApiService.getCharacterCombatPower(ocid);
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

	/**
	 * 대표ocid변경될 경우 다른 캐릭터들도 바꿔주기
	 * @param ocid
	 * @param old_parent_ocid
	 * @param new_parent_ocid
	 */
	public void updateParentOcid(String ocid, String old_parent_ocid, String new_parent_ocid) {
		List<Character> characterList = characterRepository.findByParentOcid(old_parent_ocid).stream()
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
}
