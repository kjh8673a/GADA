package com.dnf.dnfservice.dto.response;

import java.time.LocalDateTime;

import com.dnf.dnfservice.exception.ErrorCode;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
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
