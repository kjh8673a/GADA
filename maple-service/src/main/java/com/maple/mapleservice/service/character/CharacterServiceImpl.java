package com.maple.mapleservice.service.character;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import com.maple.mapleservice.dto.model.character.HyperStat;

import com.maple.mapleservice.dto.model.character.ViewRanking;
import com.maple.mapleservice.dto.response.Character.CharacterViewRankingResponseDto;
import com.maple.mapleservice.service.guild.GuildService;

import lombok.RequiredArgsConstructor;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.character.CharacterAbilityDto;
import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.feign.character.CharacterCashItemDto;
import com.maple.mapleservice.dto.feign.character.CharacterItemDto;
import com.maple.mapleservice.dto.feign.character.CharacterLinkSkillDto;
import com.maple.mapleservice.dto.feign.character.CharacterPetDto;
import com.maple.mapleservice.dto.feign.character.CharacterSkillDto;
import com.maple.mapleservice.dto.feign.character.CharacterVMatrixDto;
import com.maple.mapleservice.dto.model.character.skill.HexaStatCore;
import com.maple.mapleservice.dto.response.Character.CharacterCompareEachCharacterResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterCompareResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterVMatrixResponseDto;
import com.maple.mapleservice.util.HexaCoreTable;
import com.maple.mapleservice.dto.model.character.Symbol;
import com.maple.mapleservice.dto.model.character.skill.HexaMatrix;
import com.maple.mapleservice.dto.model.ranking.Union;
import com.maple.mapleservice.dto.response.Character.CharacterExpHistoryResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterHexaMatrixResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterItemResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;
import com.maple.mapleservice.dto.response.Character.CharacterStatsResponseDto;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.entity.CharacterExpHistory;
import com.maple.mapleservice.repository.character.CharacterExpHistoryRepository;
import com.maple.mapleservice.exception.CustomException;
import com.maple.mapleservice.exception.ErrorCode;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.service.guild.GuildApiService;
import com.maple.mapleservice.service.ranking.RankingApiService;
import com.maple.mapleservice.util.CommonUtil;
import com.maple.mapleservice.util.cache.RedisCacheEvict;
import com.maple.mapleservice.util.cache.RedisCacheable;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService {
	private final CharacterApiService characterApiService;
	private final GuildApiService guildApiService;
	private final CharacterRepository characterRepository;
	private final CharacterExpHistoryRepository characterExpHistoryRepository;

	private HexaCoreTable hexaCoreTable = new HexaCoreTable();
	private CommonUtil commonUtil = new CommonUtil();

	private final RedisTemplate redisTemplate;

	/**
	 * 캐릭터 정보 DB에 입력
	 * @param characterName
	 */
	@Override
	public void addCharacterInformationToDB(String characterName) {
		SetOperations<String, String> setOperations = redisTemplate.opsForSet();
		String key = "addCharacterToDB";
		setOperations.add(key, characterName);
	}

	@Override
	public void addCharacterInformationToDB(List<String> characterNames) {
		SetOperations<String, String> setOperations = redisTemplate.opsForSet();
		String key = "addCharacterToDB";
		for (String characterName : characterNames) {
			setOperations.add(key, characterName);
		}
	}

	public void addGuildInformationToDB(String oguildId) {
		SetOperations<String, String> setOperations = redisTemplate.opsForSet();
		String key = "addGuildToDB";
		setOperations.add(key, oguildId);
	}

	// 길드명 체크해서 oguildid가져오기
	public String getOguildId(String guildName, String worldName) {
		if (guildName == null || guildName.isBlank()) {
			return "";
		}
		return guildApiService.getOguildIdKey(guildName, worldName);
	}

	@Override
	@RedisCacheable(value = "character-information-from-DB", key = "#ocid")
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
	public List<CharacterResponseDto> findMainCharacter(String parentOcid) {
		List<CharacterResponseDto> list = characterRepository.findByParentOcid(parentOcid).stream()
			.map(CharacterResponseDto::of)
			.collect(Collectors.toList());

		List<String> characterNames = list.stream()
			.map(CharacterResponseDto::getCharacter_name)
			.collect(Collectors.toList());
		addCharacterInformationToDB(characterNames);

		return list;
	}

	/**
	 * DB 구축. 순수 캐릭터 정보만 넣기. 유니온, 본캐 정보 X
	 * @param characterName
	 */
	@Override
	public void addCharactersFromRanking(String characterName) {
		Character character = characterRepository.findByCharacterName(characterName);
		if (character != null) {
			return;
		}

		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			return;
		}

		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		String combatPower = characterApiService.getCharacterStat(ocid).get("전투력");
		String oguildId = getOguildId(characterBasicDto.getCharacter_guild_name(), characterBasicDto.getWorld_name());

		Character characterForInsert = Character.builder()
			.ocid(ocid)
			.date(commonUtil.date)
			.world_name(characterBasicDto.getWorld_name())
			.character_name(characterBasicDto.getCharacter_name())
			.combat_power(Long.valueOf(Optional.ofNullable(combatPower).orElseGet(() -> "0")))
			.guild_name(characterBasicDto.getCharacter_guild_name())
			.parent_ocid(ocid)
			.oguild_id(oguildId)
			.character_class(characterBasicDto.getCharacter_class())
			.character_class_level(characterBasicDto.getCharacter_class_level())
			.character_level(
				Long.valueOf(Optional.ofNullable(characterBasicDto.getCharacter_level()).orElseGet(() -> 0)))
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
	@RedisCacheable(value = "character-exp-history", key = "#ocid")
	public List<CharacterExpHistoryResponseDto> getCharacterExpHistory(String ocid) {
		long count = characterExpHistoryRepository.countByOcid(ocid);
		if (count == 0) {
			addCharacterExpHistoryFirstTime(ocid);
		} else if (!characterExpHistoryRepository.getLatestExpDate(ocid).equals(commonUtil.date)) {
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
			CharacterBasicDto basicDto = characterApiService.getCharacterBasicCustomDate(ocid,
				commonUtil.customDate(i));
			if (basicDto.getCharacter_exp() == null) {
				CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
				characterBasicDto.setCharacter_level(0);
				characterBasicDto.setCharacter_exp(0L);
				characterBasicDto.setCharacter_exp_rate("0");
				listForExp.add(characterBasicDto);
			} else {
				listForExp.add(basicDto);
			}
		}
		characterExpHistoryRepository.addExpHistoryFromList(ocid, listForExp);
	}

	@Override
	@RedisCacheable(value = "character-basic-info", key = "#characterName")
	public CharacterBasicInfoResponseDto getCharacterBasicInfo(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}
		addCharacterInformationToDB(characterName);

		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		if (characterBasicDto.getCharacter_level() == null || characterBasicDto.getCharacter_level() == 0) {
			return null;
		}

		Character character = characterRepository.findByOcid(ocid);
		String prevName = "";
		if (character != null) {
			prevName = character.getPrev_name();
		}
		String oguildId = getOguildId(characterBasicDto.getCharacter_guild_name(), characterBasicDto.getWorld_name());
		addGuildInformationToDB(oguildId);
		Integer popularity = characterApiService.getCharacterPopularity(ocid);
		String characterCombatPower = characterApiService.getCharacterStat(ocid).get("전투력");

		return CharacterBasicInfoResponseDto.of(ocid, characterBasicDto, popularity, characterCombatPower, prevName,
			oguildId);
	}

	@Override
	@RedisCacheable(value = "character-item", key = "#characterName")
	public CharacterItemResponseDto getCharacterItem(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}

		CharacterItemDto item = characterApiService.getCharacterItem(ocid);
		CharacterCashItemDto cash_item = characterApiService.getCharacterCashItem(ocid);
		CharacterPetDto pet = characterApiService.getCharacterPet(ocid);
		List<Symbol> symbols = characterApiService.getCharacterSymbol(ocid).getSymbol();

		return CharacterItemResponseDto.of(item, cash_item, pet, symbols);
	}

	@Override
	@RedisCacheable(value = "character-stats", key = "#characterName")
	public CharacterStatsResponseDto getCharacterStats(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}

		Map<String, String> stat = characterApiService.getCharacterStat(ocid);
		Map<String, HyperStat> hyperStat = characterApiService.getCharacterHyperStat(ocid);
		CharacterAbilityDto ability = characterApiService.getCharacterAbility(ocid);

		return CharacterStatsResponseDto.of(stat, hyperStat, ability);
	}

	@Override
	@RedisCacheable(value = "character-v-matrix", key = "#characterName")
	public CharacterVMatrixResponseDto getCharacterVMatrix(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}

		CharacterVMatrixDto characterVMatrixDto = characterApiService.getCharacterVMatrixDto(ocid);
		CharacterSkillDto characterSkillDto = characterApiService.getCharacterSkill(ocid, "5");

		return CharacterVMatrixResponseDto.of(characterVMatrixDto.getCharacter_v_core_equipment(),
			characterSkillDto.getCharacter_skill());
	}

	@Override
	@RedisCacheable(value = "character-hyper-passive", key = "#characterName")
	public CharacterSkillDto getCharacterHyperPassive(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}

		return characterApiService.getCharacterSkill(ocid, "hyperpassive");
	}

	@Override
	@RedisCacheable(value = "character-link-skill", key = "#characterName")
	public CharacterLinkSkillDto getCharacterLinkSkill(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}

		return characterApiService.getCharacterLinkSkill(ocid);
	}

	@Override
	@RedisCacheable(value = "character-hexa-matrix", key = "#characterName")
	public CharacterHexaMatrixResponseDto getCharacterHexaMatrix(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}

		List<HexaMatrix> character_hexa_core_equipment = characterApiService.getCharacterHexaMatrix(ocid)
			.getCharacter_hexa_core_equipment();

		Long used_sol_erda_energy = 0L;
		Long used_sol_erda_fragment = 0L;

		if (character_hexa_core_equipment != null) {
			for (HexaMatrix hexaMatrix : character_hexa_core_equipment) {
				int[][] usedCount = new int[1][2];
				switch (hexaMatrix.getHexa_core_type()) {
					case "스킬 코어":
						usedCount = calculateSkillCore(hexaMatrix.getHexa_core_level());
						break;
					case "마스터리 코어":
						usedCount = calculateMasteryCore(hexaMatrix.getHexa_core_level());
						break;
					case "강화 코어":
						usedCount = calculateEnhanceCore(hexaMatrix.getHexa_core_level());
						break;
					case "공용 코어":
						usedCount = calculateCommonCore(hexaMatrix.getHexa_core_level());
						break;
				}
				used_sol_erda_energy += usedCount[0][0];
				used_sol_erda_fragment += usedCount[0][1];
			}
		}

		CharacterSkillDto characterSkillDto = characterApiService.getCharacterSkill(ocid, "6");
		List<HexaStatCore> character_hexa_stat_core = characterApiService.getCharacterHexaMatrixStatDto(ocid)
			.getCharacter_hexa_stat_core();

		return CharacterHexaMatrixResponseDto.of(character_hexa_core_equipment, used_sol_erda_energy,
			used_sol_erda_fragment, characterSkillDto.getCharacter_skill(),
			character_hexa_stat_core.size() == 0 ? null : character_hexa_stat_core.get(0));
	}

	/**
	 * 캐릭터 비교
	 * @param leftCharacterName
	 * @param rightCharacterName
	 * @return
	 */
	@Override
	public CharacterCompareResponseDto getCharacterCompare(String leftCharacterName, String rightCharacterName) {
		CharacterCompareEachCharacterResponseDto left_character = getCharacterForCompare(leftCharacterName);
		CharacterCompareEachCharacterResponseDto right_character = getCharacterForCompare(rightCharacterName);

		return CharacterCompareResponseDto.of(left_character, right_character);
	}

	@Override
	public CharacterBasicInfoResponseDto getCharacterBasicInfoForGuildMember(String characterName) {
		String ocid = characterApiService.getOcidKey(characterName);
		if (ocid == null || ocid.isBlank()) {
			throw new CustomException(ErrorCode.OCID_NOT_FOUND);
		}

		CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
		Integer popularity = characterApiService.getCharacterPopularity(ocid);
		String characterCombatPower = characterApiService.getCharacterStat(ocid).get("전투력");

		return CharacterBasicInfoResponseDto.ofGuildMember(ocid, characterBasicDto, popularity, characterCombatPower);
	}

	/**
	 * 캐릭터 조회수 Redis set에 저장하기
	 * @param ocid
	 */
	@Override
	public void addCharacterViewCount(String ocid) {
		SetOperations<String, String> setOperations = redisTemplate.opsForSet();
		String key = "characterViewCount::" + ocid;
		setOperations.add(key, LocalDateTime.now(ZoneId.of("Asia/Seoul")).plusDays(7).toString());
	}

	@Override
	@RedisCacheable(value = "character-view-ranking")
	public CharacterViewRankingResponseDto getPopularCharacters() {
		List<ViewRanking> rankings = new ArrayList<>();
		Set<ZSetOperations.TypedTuple<String>> ranking = redisTemplate.opsForZSet()
			.reverseRangeWithScores("characterViewRank", 0, 4);
		int rank = 1;
		for (ZSetOperations.TypedTuple<String> data : ranking) {
			String ocid = data.getValue();
			CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
			ViewRanking viewRanking = ViewRanking.of(rank++, characterBasicDto);
			rankings.add(viewRanking);
		}

		return CharacterViewRankingResponseDto.builder().ranking(rankings).build();
	}

	public CharacterCompareEachCharacterResponseDto getCharacterForCompare(String characterName) {
		if (characterName == null || characterName.isBlank()) {
			return null;
		}

		CharacterBasicInfoResponseDto character_basic_info = getCharacterBasicInfo(characterName);
		CharacterItemResponseDto character_item = getCharacterItem(characterName);
		CharacterStatsResponseDto character_stats = getCharacterStats(characterName);

		return CharacterCompareEachCharacterResponseDto.of(character_basic_info, character_item, character_stats);
	}

	private int[][] calculateSkillCore(int hexaCoreLevel) {
		int[][] skill_core = hexaCoreTable.getSkill_core();
		int sol_erda = 0;
		int sol_erda_fragment = 0;
		for (int i = 0; i < hexaCoreLevel; i++) {
			sol_erda += skill_core[i][0];
			sol_erda_fragment += skill_core[i][1];
		}

		return new int[][] {{sol_erda, sol_erda_fragment}};
	}

	private int[][] calculateMasteryCore(int hexaCoreLevel) {
		int[][] mastery_core = hexaCoreTable.getMastery_core();
		int sol_erda = 0;
		int sol_erda_fragment = 0;
		for (int i = 0; i < hexaCoreLevel; i++) {
			sol_erda += mastery_core[i][0];
			sol_erda_fragment += mastery_core[i][1];
		}

		return new int[][] {{sol_erda, sol_erda_fragment}};
	}

	private int[][] calculateEnhanceCore(int hexaCoreLevel) {
		int[][] enhance_core = hexaCoreTable.getEnhance_core();
		int sol_erda = 0;
		int sol_erda_fragment = 0;
		for (int i = 0; i < hexaCoreLevel; i++) {
			sol_erda += enhance_core[i][0];
			sol_erda_fragment += enhance_core[i][1];
		}

		return new int[][] {{sol_erda, sol_erda_fragment}};
	}

	private int[][] calculateCommonCore(int hexaCoreLevel) {
		int[][] common_core = hexaCoreTable.getCommon_core();
		int sol_erda = 0;
		int sol_erda_fragment = 0;
		for (int i = 0; i < hexaCoreLevel; i++) {
			sol_erda += common_core[i][0];
			sol_erda_fragment += common_core[i][1];
		}

		return new int[][] {{sol_erda, sol_erda_fragment}};
	}
}
