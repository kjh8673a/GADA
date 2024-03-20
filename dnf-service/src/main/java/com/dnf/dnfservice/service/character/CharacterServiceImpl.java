package com.dnf.dnfservice.service.character;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import com.dnf.dnfservice.dto.feign.character.CharacterAvatarDto;
import com.dnf.dnfservice.dto.feign.character.CharacterBasicInfoDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentDto;
import com.dnf.dnfservice.dto.feign.character.CharacterEquipmentTraitDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSearchDto;
import com.dnf.dnfservice.dto.feign.character.CharacterSkillStyleDto;
import com.dnf.dnfservice.dto.feign.character.CharacterStatusDto;
import com.dnf.dnfservice.dto.feign.character.CharacterTalismanDto;
import com.dnf.dnfservice.dto.feign.item.ItemDetailDto;
import com.dnf.dnfservice.dto.feign.skill.SkillDetailInfoDto;
import com.dnf.dnfservice.dto.model.character.CharacterSearchInfo;
import com.dnf.dnfservice.dto.model.character.CharacterViewRanking;
import com.dnf.dnfservice.dto.model.character.avatar.CharacterAvatarWithImageAndDetail;
import com.dnf.dnfservice.dto.model.character.avatar.CharacterItemCloneWithImageAndDetail;
import com.dnf.dnfservice.dto.model.character.creature.CreatureArtifactWithImageAndDetail;
import com.dnf.dnfservice.dto.model.character.equipment.EquipmentWithDetail;
import com.dnf.dnfservice.dto.model.character.flag.CharacterFlag;
import com.dnf.dnfservice.dto.model.character.flag.FlagGemWithImageAndDetail;
import com.dnf.dnfservice.dto.model.character.skill.SkillDetail;
import com.dnf.dnfservice.dto.model.character.skill.SkillDetailWithDesc;
import com.dnf.dnfservice.dto.model.character.talisman.CharacterTalismanForResponse;
import com.dnf.dnfservice.dto.model.character.talisman.TalismanInfoWithImageAndDetail;
import com.dnf.dnfservice.dto.model.character.talisman.TalismanRuneWithImageAndDetail;
import com.dnf.dnfservice.dto.model.skill.SkillDetailInfo;
import com.dnf.dnfservice.dto.response.character.CharacterAvatarResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBasicInfoResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBuffAvatarResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBuffCreatureResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBuffEquipmentResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterBuffResponseDto;
import com.dnf.dnfservice.dto.model.character.creature.CharacterCreature;
import com.dnf.dnfservice.dto.response.character.CharacterCreatureResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterFlagResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterSkillResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterStatBuffResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterEquipmentResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterInformationResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterSearchResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterStatResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterTalismanResponseDto;
import com.dnf.dnfservice.dto.response.character.CharacterViewRankingResponseDto;
import com.dnf.dnfservice.exception.CustomException;
import com.dnf.dnfservice.exception.ErrorCode;
import com.dnf.dnfservice.feign.SkillFeignClient;
import com.dnf.dnfservice.repository.character.CharactersRepository;
import com.dnf.dnfservice.service.item.ItemApiService;
import com.dnf.dnfservice.util.ServerTable;
import com.dnf.dnfservice.util.cache.RedisCacheEvict;
import com.dnf.dnfservice.util.cache.RedisCacheable;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService {
	private final CharacterApiService characterApiService;
	private final ItemApiService itemApiService;
	private final SkillFeignClient skillFeignClient;

	private final CharactersRepository charactersRepository;

	private ServerTable serverTable = new ServerTable();
	private final RedisTemplate redisTemplate;

	@Value("${cloudfront.url}")
	private String cloudfrontUrl;

	@Override
	public List<CharacterSearchResponseDto> searchCharacters(String characterName) {
		CharacterSearchDto characterSearchDto = characterApiService.searchCharacters(characterName);

		List<CharacterSearchResponseDto> characterSearchResponseDtos = new ArrayList<>();
		characterSearchDto.getRows()
			.stream()
			.forEach(data -> {
					characterSearchResponseDtos.add(
						CharacterSearchResponseDto.of(data, serverTable.serverIdToName.get(data.getServerId())));
				}
			);

		return characterSearchResponseDtos;
	}

	@Override
	@RedisCacheable(value = "character-information", key = "#serverName + '_' + #characterName")
	public CharacterInformationResponseDto getCharacterInformation(String serverName, String characterName) {
		String serverId = serverTable.serverNameToId.get(serverName);
		if (serverId == null || serverId.isBlank()) {
			throw new CustomException(ErrorCode.SERVER_NOT_FOUND);
		}
		String characterId = getCharacterId(serverId, characterName);

		CharacterSearchDto searchCharacters = characterApiService.searchCharacters(serverId, characterName);
		if (searchCharacters.getRows().size() == 0) {
			throw new CustomException(ErrorCode.CHARACTER_NOT_FOUND);
		}

		SetOperations<String, String> setOperations = redisTemplate.opsForSet();
		String key = "addCharacterToDB";
		String value = serverName + "_" + characterName;
		setOperations.add(key, value);

		CharacterBasicInfoResponseDto characterBasicInfoResponseDto = getCharacterBasicInfo(serverName, characterName);
		CharacterStatResponseDto characterStatResponseDto = getCharacterStat(serverId, characterId);
		CharacterEquipmentResponseDto characterEquipmentResponseDto = getCharacterEquipment(serverId, characterId);
		CharacterBuffResponseDto characterBuffResponseDto = getCharacterBuff(serverId, characterId);
		CharacterSkillResponseDto characterSkillResponseDto = getCharacterSkill(serverId, characterId);
		CharacterAvatarResponseDto characterAvatarResponseDto = getCharacterAvatar(serverId, characterId);
		CharacterCreatureResponseDto characterCreatureResponseDto = getCharacterCreature(serverId, characterId);
		CharacterFlagResponseDto characterFlagResponseDto = getCharacterFlag(serverId, characterId);
		CharacterTalismanResponseDto characterTalismanResponseDto = getCharacterTalisman(serverId, characterId);

		return CharacterInformationResponseDto.of(characterBasicInfoResponseDto, characterStatResponseDto,
			characterEquipmentResponseDto, characterBuffResponseDto, characterSkillResponseDto,
			characterAvatarResponseDto, characterCreatureResponseDto, characterFlagResponseDto,
			characterTalismanResponseDto);
	}

	private CharacterBuffResponseDto getCharacterBuff(String serverId, String characterId) {
		return CharacterBuffResponseDto.of(getCharacterBuffEquipment(serverId, characterId),
			getCharacterBuffAvatar(serverId, characterId), getCharacterBuffCreature(serverId, characterId));
	}

	@Override
	@RedisCacheEvict(value = "character-information", key = "#serverName + '_' + #characterName")
	public void removeCharacterInformation(String serverName, String characterName) {

	}

	@Override
	public CharacterBasicInfoResponseDto getCharacterBasicInfo(String serverName, String characterName) {
		String serverId = serverTable.serverNameToId.get(serverName);

		CharacterSearchInfo characterSearchInfo = characterApiService.searchCharacters(serverId, characterName)
			.getRows()
			.get(0);
		String characterId = characterSearchInfo.getCharacterId();

		CharacterBasicInfoDto characterBasicInfoDto = characterApiService.getCharacterBasicInfo(serverId, characterId);

		Long jobRanking = charactersRepository.getRankByjobAndFame(characterSearchInfo.getJobName(),
			characterSearchInfo.getFame());

		String jobImage = cloudfrontUrl;
		if (characterBasicInfoDto.getJobGrowName().startsWith("眞")) {
			jobImage += characterBasicInfoDto.getJobName() + "_" + characterBasicInfoDto.getJobGrowName() + ".png";
		} else {
			jobImage += characterBasicInfoDto.getJobName() + ".png";
		}

		return CharacterBasicInfoResponseDto.of(characterSearchInfo, serverName, characterBasicInfoDto, jobRanking,
			jobImage);
	}

	@Override
	public CharacterStatResponseDto getCharacterStat(String serverId, String characterId) {
		CharacterStatusDto characterStatusDto = characterApiService.getCharacterStatus(serverId, characterId);

		List<CharacterStatBuffResponseDto> buff = new ArrayList<>();
		characterStatusDto.getBuff().stream().forEach(data -> buff.add(CharacterStatBuffResponseDto.of(data)));

		return CharacterStatResponseDto.of(buff, characterStatusDto.getStatus());
	}

	@Override
	public CharacterEquipmentResponseDto getCharacterEquipment(String serverId, String characterId) {
		List<EquipmentWithDetail> equipment = new ArrayList<>();
		CharacterEquipmentDto characterEquipmentDto = characterApiService.getCharacterEquipment(serverId, characterId);
		characterEquipmentDto.getEquipment().stream().forEach(data -> {
			ItemDetailDto itemDetailDto = itemApiService.getItemDetail(data.getItemId());
			equipment.add(EquipmentWithDetail.of(data, itemDetailDto));
		});

		CharacterEquipmentTraitDto characterEquipmentTraitDto = characterApiService.getCharacterEquipmentTrait(serverId,
			characterId);

		return CharacterEquipmentResponseDto.of(equipment, characterEquipmentDto.getSetItemInfo(),
			characterEquipmentTraitDto.getEquipmentTrait());
	}

	@Override
	public void addCharacterViewCount(String serverName, String characterName) {
		SetOperations<String, String> setOperations = redisTemplate.opsForSet();
		String key = "characterViewCount::" + serverName + "_" + characterName;
		setOperations.add(key, LocalDateTime.now(ZoneId.of("Asia/Seoul")).plusDays(7).toString());
	}

	@Override
	public CharacterBuffEquipmentResponseDto getCharacterBuffEquipment(String serverId, String characterId) {

		return CharacterBuffEquipmentResponseDto.of(
			characterApiService.getCharacterBuffEquipment(serverId, characterId));
	}

	@Override
	public CharacterBuffAvatarResponseDto getCharacterBuffAvatar(String serverId, String characterId) {

		return CharacterBuffAvatarResponseDto.of(characterApiService.getCharacterBuffAvatar(serverId, characterId));
	}

	@Override
	public CharacterBuffCreatureResponseDto getCharacterBuffCreature(String serverId, String characterId) {

		return CharacterBuffCreatureResponseDto.of(characterApiService.getCharacterBuffCreature(serverId, characterId));
	}

	@Override
	public CharacterSkillResponseDto getCharacterSkill(String serverId, String characterId) {

		CharacterSkillStyleDto characterSkillStyleDto = characterApiService.getCharacterSkillStyle(serverId,
			characterId);

		List<SkillDetailWithDesc> active = getSkillDetailWithDescList(
			characterSkillStyleDto.getSkill().getStyle().getActive(), characterSkillStyleDto.getJobId());
		List<SkillDetailWithDesc> passive = getSkillDetailWithDescList(
			characterSkillStyleDto.getSkill().getStyle().getPassive(), characterSkillStyleDto.getJobId());

		return CharacterSkillResponseDto.of(active, passive);
	}

	@Override
	public CharacterAvatarResponseDto getCharacterAvatar(String serverId, String characterId) {

		CharacterAvatarDto characterAvatarDto = characterApiService.getCharacterAvatar(serverId, characterId);

		List<CharacterAvatarWithImageAndDetail> list = new ArrayList<>();
		Optional.ofNullable(characterAvatarDto.getAvatar()).map(Collection::stream).orElseGet(Stream::empty)
			.forEach(data -> {
				ItemDetailDto itemDetail = null;
				if (data.getItemId() != null && !data.getItemId().isBlank()) {
					itemDetail = itemApiService.getItemDetail(data.getItemId());
				}

				ItemDetailDto cloneDetail = null;
				if (data.getClone() != null && data.getClone().getItemId() != null && !data.getClone()
					.getItemId()
					.isBlank()) {
					cloneDetail = itemApiService.getItemDetail(data.getClone().getItemId());
				}
				CharacterItemCloneWithImageAndDetail clone = CharacterItemCloneWithImageAndDetail.of(data.getClone(),
					cloneDetail);
				list.add(CharacterAvatarWithImageAndDetail.of(data, clone, itemDetail));
			});

		return CharacterAvatarResponseDto.of(list);
	}

	@Override
	public CharacterCreatureResponseDto getCharacterCreature(String serverId, String characterId) {

		CharacterCreature creature = characterApiService.getCharacterCreature(serverId, characterId).getCreature();
		if (creature == null) {
			return null;
		}

		ItemDetailDto cloneDetail = null;
		if (creature.getClone() != null && creature.getClone().getItemId() != null && !creature.getClone()
			.getItemId()
			.isBlank()) {
			cloneDetail = itemApiService.getItemDetail(creature.getClone().getItemId());
		}
		CharacterItemCloneWithImageAndDetail clone = CharacterItemCloneWithImageAndDetail.of(creature.getClone(),
			cloneDetail);

		List<CreatureArtifactWithImageAndDetail> artifact = new ArrayList<>();
		Optional.ofNullable(creature.getArtifact()).map(Collection::stream).orElseGet(Stream::empty)
			.forEach(data -> {
				ItemDetailDto artifactDetail = null;
				if (data.getItemId() != null && !data.getItemId().isBlank()) {
					artifactDetail = itemApiService.getItemDetail(data.getItemId());
				}
				artifact.add(CreatureArtifactWithImageAndDetail.of(data, artifactDetail));
			});

		ItemDetailDto detail = itemApiService.getItemDetail(creature.getItemId());

		return CharacterCreatureResponseDto.of(creature, clone, artifact, detail);
	}

	@Override
	public CharacterFlagResponseDto getCharacterFlag(String serverId, String characterId) {

		CharacterFlag flag = characterApiService.getCharacterFlag(serverId, characterId).getFlag();
		if (flag == null) {
			return null;
		}

		ItemDetailDto detail = itemApiService.getItemDetail(flag.getItemId());

		List<FlagGemWithImageAndDetail> gems = new ArrayList<>();
		Optional.ofNullable(flag.getGems()).map(Collection::stream).orElseGet(Stream::empty)
			.forEach(data -> {
				ItemDetailDto gemDetail = null;
				if (data.getItemId() != null && !data.getItemId().isBlank()) {
					gemDetail = itemApiService.getItemDetail(data.getItemId());
				}
				gems.add(FlagGemWithImageAndDetail.of(data, gemDetail));
			});

		return CharacterFlagResponseDto.of(flag, detail, gems);
	}

	@Override
	public CharacterTalismanResponseDto getCharacterTalisman(String serverId, String characterId) {

		CharacterTalismanDto characterTalismanDto = characterApiService.getCharacterTalisman(serverId, characterId);

		List<CharacterTalismanForResponse> talismans = new ArrayList<>();
		Optional.ofNullable(characterTalismanDto.getTalismans()).map(Collection::stream).orElseGet(Stream::empty)
			.forEach(data -> {
				ItemDetailDto talismanDetail = null;
				if (data.getTalisman().getItemId() != null && !data.getTalisman().getItemId().isBlank()) {
					talismanDetail = itemApiService.getItemDetail(data.getTalisman().getItemId());
				}

				List<TalismanRuneWithImageAndDetail> runes = new ArrayList<>();
				Optional.ofNullable(data.getRunes()).map(Collection::stream).orElseGet(Stream::empty)
					.forEach(rune -> {
						ItemDetailDto runeDetail = null;
						if (rune.getItemId() != null && !rune.getItemId().isBlank()) {
							runeDetail = itemApiService.getItemDetail(rune.getItemId());
						}
						runes.add(TalismanRuneWithImageAndDetail.of(rune, runeDetail));
					});

				talismans.add(CharacterTalismanForResponse.of(
					TalismanInfoWithImageAndDetail.of(data.getTalisman(), talismanDetail), runes));
			});

		return CharacterTalismanResponseDto.of(talismans);
	}

	@Override
	@RedisCacheable(value = "character-view-ranking", expire = 600)
	public CharacterViewRankingResponseDto getPopularCharacters() {
		List<CharacterViewRanking> rankings = new ArrayList<>();
		Set<ZSetOperations.TypedTuple<String>> ranking = redisTemplate.opsForZSet()
			.reverseRangeWithScores("characterViewRank", 0, 4);

		int rank = 1;
		for (ZSetOperations.TypedTuple<String> data : ranking) {
			String serverName = data.getValue().split("_")[0];
			String characterName = data.getValue().split("_")[1];

			CharacterSearchDto characterSearchDto = characterApiService.searchCharacters(serverTable.serverNameToId.get(serverName), characterName);
			CharacterSearchInfo characterSearchInfo = characterSearchDto.getRows().get(0);

			CharacterViewRanking viewRanking = CharacterViewRanking.of(rank++, serverName, characterSearchInfo);
			rankings.add(viewRanking);
		}

		return CharacterViewRankingResponseDto.builder().ranking(rankings).build();
	}

	private List<SkillDetailWithDesc> getSkillDetailWithDescList(List<SkillDetail> skillDetailList, String jobId) {
		List<SkillDetailWithDesc> result = new ArrayList<>();
		Optional.ofNullable(skillDetailList)
			.map(Collection::stream)
			.orElseGet(Stream::empty).forEach(data -> {
				SkillDetailInfoDto skillDetailInfoDto = null;
				try {
					skillDetailInfoDto = skillFeignClient.getSkillDetail(jobId, data.getSkillId());
					if (skillDetailInfoDto == null) {
						throw new CustomException(ErrorCode.SKILL_NOT_FOUND);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				result.add(SkillDetailWithDesc.of(data, SkillDetailInfo.of(skillDetailInfoDto)));
			});

		return result;
	}

	private String getCharacterId(String serverId, String characterName) {
		CharacterSearchInfo characterSearchInfo = characterApiService.searchCharacters(serverId, characterName)
			.getRows()
			.get(0);
		String characterId = characterSearchInfo.getCharacterId();

		return characterId;
	}
}
