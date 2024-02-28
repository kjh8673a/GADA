package com.dnf.dnfservice.dto.response;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class SuccessResponse {

	private LocalDateTime timestamp;
	private Object data; // dto 삽입

	public static SuccessResponse of(Object data){
		return SuccessResponse.builder()
			.timestamp(LocalDateTime.now())
			.data(data)
			.build();
	}
}
