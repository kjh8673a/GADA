package com.maple.mapleservice.dto.response.Ranking;

import com.maple.mapleservice.entity.Guild;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class GuildCombatPowerRankingResponseDto {
    Long rank;
    String oguildId;
    String name;
    String worldName;
    String masterName;
    Long level;
    Long combatPower;

//    public static GuildCombatPowerRankingResponseDto of(Long rank, Guild guild){
//        return GuildCombatPowerRankingResponseDto.builder()
//                .rank(rank)
//                .guildName(guild.getName())
//                .worldName(guild.getWorldName())
//                .guildMasterName(guild.getMasterName())
//                .guildLevel(guild.getLevel())
//                .guildCombatPower(guild.getCombatPower())
//                .build();
//    }
}
