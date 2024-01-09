package com.maple.mapleservice.dto.response;

import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public class SuccessResponse<T> {

    private LocalDateTime timestamp;
    private T data; // dto 삽입
}