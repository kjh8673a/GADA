package com.dnf.dnfservice.dto.model.character.buff;

import java.util.List;

import lombok.Getter;

@Getter
public class BuffSkillEquipmentBuff {
	BuffSkillBuffSkillInfo skillInfo;
	List<BuffSkillEquipmentBuffEquipment> equipment;
}
