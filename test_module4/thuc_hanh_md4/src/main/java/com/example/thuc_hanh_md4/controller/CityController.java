package com.example.thuc_hanh_md4.controller;

import com.example.thuc_hanh_md4.model.City;
import com.example.thuc_hanh_md4.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cities")
public class CityController {
    @Autowired
    private CityService cityService;

    @GetMapping
    public ResponseEntity<List<City>> findAll() {
        return new ResponseEntity<>(cityService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody City city) {
        cityService.save(city);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody City city, @PathVariable Long id) {
        Optional<City> candyOptional = cityService.findOne(id);
        if (candyOptional.isPresent()) {
            city.setId(id);
            cityService.save(city);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<City>> delete(@PathVariable Long id) {
        Optional<City> candyOptional = cityService.findOne(id);
        if (candyOptional.isPresent()) {
            cityService.delete(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<City>> findOne(@PathVariable Long id) {
        return new ResponseEntity<>(cityService.findOne(id), HttpStatus.OK);
    }
}
