package com.maple.mapleservice.entity;

import com.maple.mapleservice.util.WorldName;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor
@ToString
@Table(name = "guild")
public class Guild {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name ="oguild_id", columnDefinition = "VARCHAR(200)", unique = true)
    private String oguildId;

    @Column(name = "date", columnDefinition = "VARCHAR(20)")
    private String date;

    @Column(name = "name", columnDefinition = "VARCHAR(20)")
    private String name;

    @Column(name = "world_name", columnDefinition = "VARCHAR(20)")
    private String worldName;

    @Column(name = "master_name", columnDefinition = "VARCHAR(20)")
    private String masterName;

    @Column(name = "combat_power", columnDefinition = "BIGINT")
    private Long combatPower;

    @Column(name = "level", columnDefinition = "BIGINT")
    private Long level;


    @Builder
    public Guild(Long id, String date, String oguildId, String name, String worldName, String masterName, Long combatPower, Long level) {
        this.id = id;
        this.date = date;
        this.oguildId = oguildId;
        this.name = name;
        this.worldName = worldName;
        this.masterName = masterName;
        this.combatPower = combatPower;
        this.level = level;
    }
}
