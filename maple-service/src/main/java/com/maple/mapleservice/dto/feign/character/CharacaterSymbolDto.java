package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.entity.character.Symbol;
import lombok.Data;

import java.util.List;

@Data
public class CharacaterSymbolDto {
    List<Symbol> symbol;
}
