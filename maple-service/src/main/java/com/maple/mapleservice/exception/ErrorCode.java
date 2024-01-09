package com.maple.mapleservice.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // 400 BAD_REQUEST : 잘못된 요청

    // 404 NOT_FOUND : 리소스를 찾을 수 없음

    // Server Error 5xx
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버에 오류가 발생하여 요청을 수행할 수 없습니다");

    private final HttpStatus httpStatus;
    private final String message;
}
