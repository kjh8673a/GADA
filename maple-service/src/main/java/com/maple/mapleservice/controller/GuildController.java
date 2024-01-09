package com.maple.mapleservice.controller;

import com.maple.mapleservice.dto.feign.guild.GuildBasicDto;
import com.maple.mapleservice.dto.response.SuccessResponse;
import com.maple.mapleservice.service.guild.GuildService;
import com.maple.mapleservice.util.ResponseUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/maple-service/guild")
public class GuildController {

    private final GuildService guildService;
    private final ResponseUtil responseUtil;

    @GetMapping("/basic")
    public ResponseEntity<SuccessResponse> getGuildBasicInfos(@RequestParam String guildName){
        List<GuildBasicDto> guildBasicDtoList = guildService.getGuildBasicInfosByServer(guildName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(responseUtil.buildSuccessResponse(guildBasicDtoList));
    }

}
