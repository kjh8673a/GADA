package com.dnf.dnfservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "characters")
public class Characters {

	@Id
	@Column(name = "character_id", columnDefinition = "VARCHAR(200)")
	private String characterId;

	@Column(name = "character_name", columnDefinition = "VARCHAR(20)")
	private String characterName;

	@Column(name = "server_id", columnDefinition = "VARCHAR(200)")
	private String serverId;

	@Column(name = "server_name", columnDefinition = "VARCHAR(20)")
	private String serverName;

	@Column(name = "level", columnDefinition = "INT")
	private Long level;

	@Column(name = "job_name", columnDefinition = "VARCHAR(20)")
	private String jobName;

	@Column(name = "job_grow_name", columnDefinition = "VARCHAR(20)")
	private String jobGrowName;

	@Column(name = "adventure_name", columnDefinition = "VARCHAR(20)")
	private String adventureName;

	@Column(name = "guild_name", columnDefinition = "VARCHAR(20)")
	private String guildName;

	@Column(name = "fame", columnDefinition = "INTEGER")
	private Long fame;
}
