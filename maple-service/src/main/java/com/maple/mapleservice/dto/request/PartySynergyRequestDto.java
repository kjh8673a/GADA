package com.maple.mapleservice.dto.request;

import java.util.List;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PartySynergyRequestDto {
	String characterName;
	List<String> selectedCharacters;
}
