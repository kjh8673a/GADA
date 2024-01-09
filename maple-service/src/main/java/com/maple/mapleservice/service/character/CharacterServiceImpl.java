package com.maple.mapleservice.service.character;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.maple.mapleservice.dto.feign.character.CharacterBasicDto;
import com.maple.mapleservice.dto.model.ranking.Union;
import com.maple.mapleservice.dto.response.Character.CharacterResponseDto;
import com.maple.mapleservice.dto.response.ResponseDto;
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

        // 유니온 랭킹으로 가져온 캐릭터들 정보 넣기
        AddChacterInformationToDbFromUnionRanking(characterName, parent_ocid, unionList);

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
            if(characterBasicDto.getCharacter_guild_name() != null && !characterBasicDto.getCharacter_guild_name().equals(character.getGuild_name())) {
                character.setGuild_name(characterBasicDto.getCharacter_guild_name());
                // 길드ocid 조회하는 api 필요
                character.setOguild_id("oguild_name");
            }
            // 대표ocid
            if(!character.getParent_ocid().equals(parent_ocid)) {
                // 대표ocid변경될 경우 다른 캐릭터들도 바꿔주기
                updateParentOcid(ocid, character.getParent_ocid(), parent_ocid);
                character.setParent_ocid(parent_ocid);
            }

            characterRepository.save(character);
        }else {
            Character characterForInsert = Character.builder()
                .ocid(ocid)
                .date(commonUtil.date)
                .world_name(characterBasicDto.getWorld_name())
                .character_name(characterBasicDto.getCharacter_name())
                .combat_power(Long.parseLong(combatPower))
                .guild_name(characterBasicDto.getCharacter_guild_name())
                .parent_ocid(parent_ocid)
                // 길드ocid 조회하는 api 필요
                .oguild_id("oguild_id")
                .build();

            characterRepository.save(characterForInsert);
        }
    }

    @Override
    @Cacheable(value = "character-information-from-DB", key = "#ocid")
    public ResponseDto GetCharacterFromDB(String ocid) {
        Character character = characterRepository.findByOcid(ocid);
        if(character == null) {
            throw new IllegalStateException("존재하지 않는 캐릭터입니다.");
        }

        ResponseDto responseDto = new ResponseDto<>();
        responseDto.setData(CharacterResponseDto.of(character));

        return responseDto;
    }

    @Override
    public ResponseDto FindMainCharacter(String ocid) {
        Character character = characterRepository.findByOcid(ocid);
        if(character == null) {
            throw new IllegalStateException("존재하지 않는 캐릭터입니다.");
        }

        String parent_ocid = character.getParent_ocid();

        List<CharacterResponseDto> characterResponseDtoList = characterRepository.findByParentOcid(parent_ocid).stream()
            .map(CharacterResponseDto::of)
            .collect(Collectors.toList());

        ResponseDto responseDto = new ResponseDto<>();
        responseDto.setData(characterResponseDtoList);

        return responseDto;
    }

    /**
     * 유니온 랭킹으로 가져온 캐릭터들 정보 넣기
     * @param characterName
     * @param parentOcid
     * @param unionList
     */
    public void AddChacterInformationToDbFromUnionRanking(String characterName, String parentOcid, List<Union> unionList) {
        List<Union> unionListToBeAdded = unionList.stream().filter(u -> characterRepository.finndByCharacterName(u.getCharacter_name()) == null)
            .filter(u -> !u.getCharacter_name().equals(characterName))
            .collect(Collectors.toList());

        String sql = "INSERT INTO characters (ocid, date, world_name, character_name, combat_power, guild_name, parent_ocid, oguild_id) "
            + "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                Union union = unionListToBeAdded.get(i);
                String ocid = characterApiService.getOcidKey(union.getCharacter_name());
                CharacterBasicDto characterBasicDto = characterApiService.getCharacterBasic(ocid);
                String combatPower = characterApiService.getCharacterCombatPower(ocid);

                ps.setString(1, ocid);
                ps.setString(2, commonUtil.date);
                ps.setString(3, characterBasicDto.getWorld_name());
                ps.setString(4, union.getCharacter_name());
                ps.setLong(5, Long.parseLong(combatPower));
                ps.setString(6, characterBasicDto.getCharacter_guild_name());
                ps.setString(7, parentOcid);
                // 길드ocid 조회하는 api 필요
                ps.setString(8, "oguild_id");
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
