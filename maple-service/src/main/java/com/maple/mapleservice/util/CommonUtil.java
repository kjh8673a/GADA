package com.maple.mapleservice.util;

import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

@Getter
public class CommonUtil {
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private final ZoneId zoneId = ZoneId.of("Asia/Seoul");

    public final String date = LocalDateTime.now().atZone(zoneId).minusDays(1).minusHours(1).format(formatter);

    public String customDate(int before) {
        return LocalDateTime.now().atZone(zoneId).minusDays(1 + before).minusHours(1).format(formatter);
    }

    public Long setTtl() {
        LocalDateTime now = LocalDateTime.now(zoneId);
        LocalDateTime end = LocalDateTime.of(getNextDate(), ZonedDateTime.of(getNextDate(), LocalTime.of(0, 0, 0), zoneId).toLocalTime());

        return now.until(end, ChronoUnit.SECONDS);
    }

    private LocalDate getNextDate() {
        return LocalDateTime.now().atZone(zoneId).plusDays(1).toLocalDate();
        // if(LocalDateTime.now(zoneId).toLocalTime().isBefore(LocalTime.of(1, 0, 0))) {
        //     return LocalDateTime.now().atZone(zoneId).toLocalDate();
        // }else {
        //     return LocalDateTime.now().atZone(zoneId).plusDays(1).toLocalDate();
        // }
    }
}
