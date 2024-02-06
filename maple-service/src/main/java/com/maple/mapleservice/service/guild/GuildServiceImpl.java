package com.maple.mapleservice.service.guild;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.dto.response.Character.CharacterBasicInfoResponseDto;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.exception.CustomException;
import com.maple.mapleservice.exception.ErrorCode;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.service.character.CharacterApiService;
import com.maple.mapleservice.service.character.CharacterService;
import com.maple.mapleservice.util.WorldName;
import com.maple.mapleservice.util.cache.RedisCacheable;

import lombok.RequiredArgsConstructor;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class GuildServiceImpl implements GuildService {

	private final GuildApiService guildApiService;

	private final CharacterService characterService;

	private final CharacterApiService characterApiService;
	private final CharacterRepository characterRepository;
	private final RedisTemplate redisTemplate;

	@Override
	public void addGuildInformationToDB(String oguildId){
		SetOperations<String, String> setOperations = redisTemplate.opsForSet();
		String key = "addGuildToDB";
		setOperations.add(key, oguildId);
	}

	@Override
	public void addGuildInformationToDB(List<String> oguildIds){
		SetOperations<String, String> setOperations = redisTemplate.opsForSet();
		String key = "addGuildToDB";
		for(String oguildId : oguildIds) {
			setOperations.add(key, oguildId);
		}
	}
	@Override
	public List<GuildBasicDto> getGuildBasicInfosByServer(String guildName) {
		List<GuildBasicDto> guildBasicList = new ArrayList<>();
		List<String> oguildIdList = getAllOguildIdByGuildName(guildName);

		for (String oguildId : oguildIdList) {
			guildBasicList.add(guildApiService.getGuildBasic(oguildId));
		}

		return guildBasicList;
	}

	public List<String> getAllOguildIdByGuildName(String guildName) {
		List<String> oguildIdList = new ArrayList<>();

		for (WorldName worldName : WorldName.values()) {
			Optional<String> oguildId = Optional.ofNullable(
				guildApiService.getOguildIdKey(guildName, worldName.name()));
			oguildId.ifPresent(oguildIdList::add);
		}
		addGuildInformationToDB(oguildIdList);

		return oguildIdList;
	}

	@Override
	@RedisCacheable(value = "guild-members", key = "#worldName + '_' + #guildName")
	public List<Character> getGuildMembers(String guildName, String worldName) {
		String oguildId = guildApiService.getOguildIdKey(guildName, worldName);
		if (oguildId == null || oguildId.isBlank()) {
			throw new CustomException(ErrorCode.GUILD_NOT_FOUND);
		}

		GuildBasicDto guildBasicDto = guildApiService.getGuildBasic(oguildId);

		List<String> characterNames = guildBasicDto.getGuild_member();

		characterService.addCharacterInformationToDB(characterNames);
		addGuildInformationToDB(oguildId);

		List<Character> characterList = characterRepository.getGuildMembersInfo(oguildId, characterNames);

		return characterList;
	}
}
