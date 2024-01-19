package com.maple.mapleservice.dto.response;

import com.maple.mapleservice.exception.ErrorCode;
import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public class ErrorResponse {

    private LocalDateTime timestamp;
    private int status;
    private String error;
    private String message;
    private String path;

    public static ErrorResponse of(ErrorCode error, String path){
        return ErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(error.getHttpStatus().value())
                .error(error.name())
                .message(error.getMessage())
                .path(path)
                .build();
    }
}
