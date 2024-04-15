package com.maple.mapleservice.service.union;

import com.maple.mapleservice.dto.response.union.UnionArtifactResponseDto;
import com.maple.mapleservice.dto.response.union.UnionInfoResponseDto;

public interface UnionService {
	UnionInfoResponseDto getUnionInfoResponseDto(String characterName);

	UnionArtifactResponseDto getUnionArtifactResponseDto(String characterName);

	void deleteUnionInfoResponseDto(String characterName);

	void deleteUnionArtifactResponseDto(String characterName);
}
