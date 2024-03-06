package com.dnf.dnfservice.dto.model.character.flag;

import java.util.List;

import lombok.Getter;

@Getter
public class CharacterFlag {
	String itemId;
	String itemName;
	String itemRarity;
	Integer reinforce;
	List<FlagReinforceStatus> reinforceStatus;
	List<FlagGem> gems;
}
