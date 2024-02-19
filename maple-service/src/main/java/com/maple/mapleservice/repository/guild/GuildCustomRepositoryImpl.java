package com.maple.mapleservice.repository.guild;

import com.maple.mapleservice.entity.Guild;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

@Slf4j
@Repository
@RequiredArgsConstructor
public class GuildCustomRepositoryImpl implements GuildCustomRepository{

    private final JdbcTemplate jdbcTemplate;
    @Override
    public void batchGuildInsert(List<Guild> guildInsertList) {
        String sql = "INSERT INTO guild (oguild_Id, date, name, world_name, master_name, combat_power, level) VALUES (?, ?, ?, ?, ?, ?, ?)";

        jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                Guild guild = guildInsertList.get(i);

                ps.setString(1, guild.getOguildId());
                ps.setString(2, guild.getDate());
                ps.setString(3, guild.getName());
                ps.setString(4, guild.getWorldName());
                ps.setString(5, guild.getMasterName());
                ps.setLong(6, guild.getCombatPower());
                ps.setLong(7, guild.getLevel());
            }

            @Override
            public int getBatchSize() {
                return guildInsertList.size();
            }
        });
    }



    @Override
    public void batchGuildUpdate(List<Guild> guildUpdateList) {
        String sql = "UPDATE guild SET oguild_id = ?, date = ?, name = ?, world_name = ?, master_name = ?, combat_power = ?, level = ? WHERE id = ?";

        jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                Guild guild = guildUpdateList.get(i);

                ps.setString(1, guild.getOguildId());
                ps.setString(2, guild.getDate());
                ps.setString(3, guild.getName());
                ps.setString(4, guild.getWorldName());
                ps.setString(5, guild.getMasterName());
                ps.setLong(6, guild.getCombatPower());
                ps.setLong(7, guild.getLevel());

                ps.setLong(8, guild.getId());
            }

            @Override
            public int getBatchSize() {
                return guildUpdateList.size();
            }
        });

    }
}
