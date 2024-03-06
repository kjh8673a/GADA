package com.dnf.dnfservice.dto.response.character;

import java.util.List;

import com.dnf.dnfservice.dto.model.character.avatar.CharacterAvatarWithImage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CharacterAvatarResponseDto {
	List<CharacterAvatarWithImage> avatar;

	public static CharacterAvatarResponseDto of(List<CharacterAvatarWithImage> avatar) {
		return CharacterAvatarResponseDto.builder()
			.avatar(avatar)
			.build();
	}
}
