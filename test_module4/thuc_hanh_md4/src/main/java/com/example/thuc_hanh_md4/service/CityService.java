package com.example.thuc_hanh_md4.service;

import com.example.thuc_hanh_md4.model.City;
import com.example.thuc_hanh_md4.repository.ICityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService {
    @Autowired
    private ICityRepository iCityRepository;


    public List<City> findAll() {
        return iCityRepository.findAll();
    }


    public Optional<City> findOne(Long aLong) {
        return iCityRepository.findById(aLong);
    }


    public void save(City city) {
        iCityRepository.save(city);
    }

    public void delete(Long aLong) {
        iCityRepository.deleteById(aLong);
    }
}
