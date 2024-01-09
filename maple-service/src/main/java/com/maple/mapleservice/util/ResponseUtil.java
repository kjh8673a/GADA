package com.maple.mapleservice.util;

import com.maple.mapleservice.dto.response.ErrorResponse;
import com.maple.mapleservice.dto.response.SuccessResponse;
import com.maple.mapleservice.exception.ErrorCode;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class ResponseUtil<T> {

    public SuccessResponse<T> buildSuccessResponse(T data){
        return SuccessResponse.<T>builder()
                .timestamp(LocalDateTime.now())
                .data(data)
                .build();
    }

    public ErrorResponse buildErrorResponse(ErrorCode error, String path){
        return ErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(error.getHttpStatus().value())
                .error(error.name())
                .message(error.getMessage())
                .path(path)
                .build();
    }
}
