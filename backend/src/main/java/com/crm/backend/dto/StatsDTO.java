package com.crm.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StatsDTO {
    private long clients;
    private long vendors;
    private long licenses;
    private long activeLicenses;
}
