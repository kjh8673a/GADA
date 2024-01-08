package com.maple.mapleservice.service.character;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Collections;
import java.util.List;

import lombok.RequiredArgsConstructor;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.feign.character.CharacterStatDto;
import com.maple.mapleservice.dto.model.ranking.Union;
import com.maple.mapleservice.entity.Character;
import com.maple.mapleservice.repository.character.CharacterRepository;
import com.maple.mapleservice.service.ranking.RankingApiService;
import com.maple.mapleservice.util.CommonUtil;

@Service
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService{
    private final CharacterApiService characterApiService;
    private final RankingApiService rankingApiService;

    private final CharacterRepository characterRepository;

    private final JdbcTemplate jdbcTemplate;

    private CommonUtil commonUtil = new CommonUtil();

    @Override
    public void AddCharacterInformationToDB(String characterName) {
        String ocid = characterApiService.getOcidKey(characterName);
        CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
        String combatPower = characterApiService.getCharacterCombatPower(ocid);
        List<Union> unionList = rankingApiService.getRankingUnion(ocid, characterBasicDto.getWorld_name());
        Collections.sort(unionList, (o1, o2) -> Long.compare(o2.getUnion_level(), o1.getUnion_level()));

        String parent_ocid = characterApiService.getOcidKey(unionList.get(0).getCharacter_name());

        Character character = characterRepository.findByOcid(ocid);
        if(character != null) {
            // 조회 기준일 같으면 갱신안함
            if(character.getDate().equals(commonUtil.date)) {
                return;
            }

            // 조회 기준일
            character.setDate(commonUtil.date);
            // 월드 명
            character.setWorld_name(characterBasicDto.getWorld_name());
            // 캐릭터 이름 + 이전 캐릭터 이름
            if(!character.getCharacter_name().equals(characterBasicDto.getCharacter_name())) {
                character.setPrev_name(character.getCharacter_name());
                character.setCharacter_name(characterBasicDto.getCharacter_name());
            }
            // 전투력
            character.setCombat_power(Long.parseLong(combatPower));
            // 길드명 + 길드식별자
            if(!character.getGuild_name().equals(characterBasicDto.getCharacter_guild_name())) {
                character.setGuild_name(characterBasicDto.getCharacter_guild_name());
                // 길드ocid 조회하는 api 필요
            }
            // 대표ocid
            if(!character.getParent_ocid().equals(parent_ocid)) {
                updateParentOcid(ocid, character.getParent_ocid(), parent_ocid);
                character.setParent_ocid(parent_ocid);
            }

        }else {
            Character characterForInsert = Character.builder()
                .ocid(ocid)
                .date(commonUtil.date)
                .world_name(characterBasicDto.getWorld_name())
                .character_name(characterBasicDto.getCharacter_name())
                .combat_power(Long.parseLong(combatPower))
                .guild_name(characterBasicDto.getCharacter_guild_name())
                .parent_ocid(parent_ocid)
                .build();
                // 길드ocid 조회하는 api 필요

            characterRepository.save(characterForInsert);
        }
    }

    public void updateParentOcid(String ocid, String old_parent_ocid, String new_parent_ocid) {
        List<Character> characterList = characterRepository.findByParentOcidExceptOriginal(ocid, old_parent_ocid);

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
