package com.maple.mapleservice.service.synergy;

import com.maple.mapleservice.dto.request.PartySynergyRequestDto;
import com.maple.mapleservice.dto.response.synergy.SynergyResponseDto;

public interface SynergyService {
	SynergyResponseDto partySynergy(PartySynergyRequestDto partySynergyRequestDto);
}
