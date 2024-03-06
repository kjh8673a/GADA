package com.dnf.dnfservice.dto.model.character.talisman;

import java.util.List;

import lombok.Getter;

@Getter
public class TalismanInfo {
	Integer slotNo;
	String itemId;
	String itemName;
	List<String> runeTypes;
}
