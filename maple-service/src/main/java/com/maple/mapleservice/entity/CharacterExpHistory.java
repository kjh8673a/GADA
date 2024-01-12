package com.maple.mapleservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "character_exp_history")
public class CharacterExpHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "ocid", columnDefinition = "VARCHAR(200)")
	private String ocid;

	@Column(name = "date", columnDefinition = "VARCHAR(20)")
	private String date;

	@Column(name = "character_level", columnDefinition = "INT")
	private Long character_level;

	@Column(name = "exp", columnDefinition = "BIGINT")
	private Long exp;

	@Column(name = "character_exp_rate", columnDefinition = "VARCHAR(20)")
	private String character_exp_rate;

	@Builder
	public CharacterExpHistory(String ocid, String date, Long character_level, Long exp, String character_exp_rate) {
		this.ocid = ocid;
		this.date = date;
		this.character_level = character_level;
		this.exp = exp;
		this.character_exp_rate = character_exp_rate;
	}
}
