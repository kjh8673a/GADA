package com.maple.mapleservice.dto.response.union;

import java.util.List;

import com.maple.mapleservice.dto.model.union.UnionArtifactCrystal;
import com.maple.mapleservice.dto.model.union.UnionArtifactEffect;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UnionArtifactResponseDto {
	int artifact_level;
	List<UnionArtifactEffect> union_artifact_effect;
	List<UnionArtifactCrystal> union_artifact_crystal;

	public static UnionArtifactResponseDto of(int artifact_level, List<UnionArtifactEffect> union_artifact_effect,
		List<UnionArtifactCrystal> union_artifact_crystal) {
		return UnionArtifactResponseDto.builder()
			.artifact_level(artifact_level)
			.union_artifact_effect(union_artifact_effect)
			.union_artifact_crystal(union_artifact_crystal)
			.build();
	}
}
