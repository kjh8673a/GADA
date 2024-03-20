package com.dnf.dnfservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dnf.dnfservice.dto.response.SuccessResponse;
import com.dnf.dnfservice.service.auction.AuctionService;

import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dnf-service/auction")
public class AuctionController {
	private final AuctionService auctionService;

	@RequestMapping("/searchAuction")
	public ResponseEntity<SuccessResponse> searchCharacters(@RequestParam @Size(min = 2) String itemName) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(auctionService.searchAuctionItems(itemName)));
	}

	@RequestMapping("/getAuctionItem")
	public ResponseEntity<SuccessResponse> getAuctionItemInformation(@RequestParam String itemId) {

		return ResponseEntity
			.status(HttpStatus.OK)
			.body(SuccessResponse.of(auctionService.getAuctionItemInformation(itemId)));
	}
}
