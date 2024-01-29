package com.maple.mapleservice.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // 400 BAD_REQUEST : 잘못된 요청
    OCID_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 ocid입니다."),
    CHARACATER_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 캐릭터입니다."),
    GUILD_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 길드입니다."),
    INVALID_CLASS_LEVEL(HttpStatus.NOT_ACCEPTABLE, "5차 전직 이상의 캐릭터만 조회가 가능합니다."),

    // 404 NOT_FOUND : 리소스를 찾을 수 없음

    // Server Error 5xx
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버에 오류가 발생하여 요청을 수행할 수 없습니다");

    private final HttpStatus httpStatus;
    private final String message;
}
