package com.maple.mapleservice.dto.response;

import lombok.Data;

@Data
public class ResponseDto<T> {
    private int status_code; // 상태코드
    private String message; // 메세지 적기
    private T data; // dto 삽입
}