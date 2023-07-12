package com.example.thuc_hanh_md4.controller;

import com.example.thuc_hanh_md4.model.City;
import com.example.thuc_hanh_md4.model.Country;
import com.example.thuc_hanh_md4.service.CityService;
import com.example.thuc_hanh_md4.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping
    public ResponseEntity<List<Country>> findAll() {
        return new ResponseEntity<>(countryService.findAll(), HttpStatus.OK);
    }
}
