package com.maple.mapleservice.util;

import lombok.Getter;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
@Getter
public class CommonUtil {
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    public final String date = LocalDate.now().minusDays(1).format(formatter);

}
