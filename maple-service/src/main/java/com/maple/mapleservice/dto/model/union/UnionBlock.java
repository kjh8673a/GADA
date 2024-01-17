package com.maple.mapleservice.dto.model.union;

import java.util.List;

import lombok.Getter;

@Getter
public class UnionBlock {
	String block_type;
	String block_class;
	String block_level;
	BlockPosition block_control_point;
	List<BlockPosition> block_position;
}
