package com.dnf.dnfservice.dto.model.item;

import java.util.List;

import lombok.Getter;

@Getter
public class ItemObtainInfo {
	List<DungeonObtain> dungeon;
	List<ShopObtain> shop;
}
