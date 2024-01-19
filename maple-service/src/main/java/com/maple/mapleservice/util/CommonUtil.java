package com.maple.mapleservice.util;

import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
@Getter
public class CommonUtil {
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private final ZoneId zoneId = ZoneId.of("Asia/Seoul");

    public final String date = LocalDateTime.now().atZone(zoneId).minusDays(1).minusHours(1).format(formatter);
}
