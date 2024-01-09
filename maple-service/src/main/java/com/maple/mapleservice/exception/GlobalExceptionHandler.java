package com.maple.mapleservice.exception;

import com.maple.mapleservice.dto.response.ErrorResponse;
import com.maple.mapleservice.util.ResponseUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Slf4j
@RestControllerAdvice
@RequiredArgsConstructor
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    private final ResponseUtil<ErrorResponse> responseUtil;

    @ExceptionHandler(value = {CustomException.class})
    public ResponseEntity<ErrorResponse> handleCustomException(CustomException e, HttpServletRequest request){
        log.error("CustomException : {}", e.getErrorCode());
        return ResponseEntity
                .status(e.getErrorCode().getHttpStatus())
                .body(responseUtil.buildErrorResponse(e.getErrorCode(), request.getRequestURI()));
    }

    @ExceptionHandler(value = {Exception.class})
    public ResponseEntity<ErrorResponse> handleServerException(Exception e, HttpServletRequest request){
        log.error("ServerError : {}", e.getMessage());
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(responseUtil.buildErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR, request.getRequestURI()));
    }
}
