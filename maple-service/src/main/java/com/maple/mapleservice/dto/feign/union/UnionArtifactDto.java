package com.maple.mapleservice.dto.feign.union;

import java.util.List;

import com.maple.mapleservice.dto.model.union.UnionArtifactCrystal;
import com.maple.mapleservice.dto.model.union.UnionArtifactEffect;

import lombok.Getter;

@Getter
public class UnionArtifactDto {
	List<UnionArtifactEffect> union_artifact_effect;
	List<UnionArtifactCrystal> union_artifact_crystal;
}


