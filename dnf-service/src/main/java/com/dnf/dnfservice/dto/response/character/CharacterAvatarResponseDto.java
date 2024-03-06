package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.avatar.CharacterAvatarWithImageAndDetail;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterAvatarResponseDto {
	List<CharacterAvatarWithImageAndDetail> avatar;

	public static CharacterAvatarResponseDto of(List<CharacterAvatarWithImageAndDetail> avatar) {
		return CharacterAvatarResponseDto.builder()
			.avatar(avatar)
			.build();
	}
}
