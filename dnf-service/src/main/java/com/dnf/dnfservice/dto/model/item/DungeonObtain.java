package com.dnf.dnfservice.dto.model.item;

import java.util.List;

import lombok.Getter;

@Getter
public class DungeonObtain {
	String type;
	List<DungeonObtainDetail> rows;
}
