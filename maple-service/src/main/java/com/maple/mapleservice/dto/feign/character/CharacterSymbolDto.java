package com.maple.mapleservice.dto.feign.character;

import com.maple.mapleservice.dto.model.character.Symbol;
import lombok.Getter;

import java.util.List;

@Getter
public class CharacterSymbolDto {
    List<Symbol> symbol;
}
