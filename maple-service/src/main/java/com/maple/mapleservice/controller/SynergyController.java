package com.maple.mapleservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maple.mapleservice.dto.request.PartySynergyRequestDto;
import com.maple.mapleservice.dto.response.SuccessResponse;
import com.maple.mapleservice.dto.response.synergy.SynergyResponseDto;
import com.maple.mapleservice.service.synergy.SynergyService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/maple-service/synergy")
public class SynergyController {
	private final SynergyService synergyService;

	@RequestMapping("/findPartySynergy")
	public ResponseEntity<SuccessResponse> findPartySynergy(@RequestBody PartySynergyRequestDto partySynergyRequestDto) {
		SynergyResponseDto synergyResponseDto = synergyService.partySynergy(partySynergyRequestDto);

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(synergyResponseDto));
	}
}
