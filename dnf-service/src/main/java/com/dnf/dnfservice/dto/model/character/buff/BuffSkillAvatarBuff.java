package com.dnf.dnfservice.dto.model.character.buff;

import java.util.List;

import lombok.Getter;

@Getter
public class BuffSkillAvatarBuff {
	BuffSkillBuffSkillInfo skillInfo;
	List<BuffSkillAvatarBuffAvatar> avatar;
}
