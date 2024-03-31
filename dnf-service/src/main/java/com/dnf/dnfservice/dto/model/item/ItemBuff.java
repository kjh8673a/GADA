package com.dnf.dnfservice.dto.model.item;

import java.util.List;

import lombok.Getter;

@Getter
public class ItemBuff {
	String explain;
	String explainDetail;
	List<ItemReinforceSkill> reinforceSkill;
}
