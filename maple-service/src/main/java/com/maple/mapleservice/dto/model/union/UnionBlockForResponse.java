package com.maple.mapleservice.dto.model.union;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Data
public class UnionBlockForResponse {
	String block_type;
	String block_class;
	String block_level;
	BlockPosition block_control_point;
	List<BlockPosition> block_position;
	String class_image;
	String grade;

	public static UnionBlockForResponse of(UnionBlock unionBlock) {
		String className = unionBlock.getBlock_class();
		int blockLevel = Integer.parseInt(unionBlock.getBlock_level());
		String grade = "";
		if(className.equals("모바일 캐릭터")) {
			if(blockLevel >= 120) {
				grade = "SS";
			}else if(blockLevel >= 70) {
				grade = "S";
			}else if(blockLevel >= 50) {
				grade = "A";
			}else {
				grade = "B";
			}
		}else if(className.equals("제로")) {
			if(blockLevel >= 250) {
				grade = "SSS";
			}else if(blockLevel >= 200) {
				grade = "SS";
			}else if(blockLevel >= 180) {
				grade = "S";
			}else if(blockLevel >= 160){
				grade = "A";
			}else {
				grade = "B";
			}
		}else {
			if(blockLevel >= 250) {
				grade = "SSS";
			}else if(blockLevel >= 200) {
				grade = "SS";
			}else if(blockLevel >= 140) {
				grade = "S";
			}else if(blockLevel >= 100){
				grade = "A";
			}else {
				grade = "B";
			}
		}

		return UnionBlockForResponse.builder()
			.block_type(unionBlock.getBlock_type())
			.block_class(unionBlock.getBlock_class())
			.block_level(unionBlock.getBlock_level())
			.block_control_point(unionBlock.getBlock_control_point())
			.block_position(unionBlock.getBlock_position())
			.class_image("https://d2ehkq4zb63ju5.cloudfront.net/maplestory/asset/" + unionBlock.getBlock_class().replace(" ", "") + ".png")
			.grade(grade)
			.build();
	}
}
