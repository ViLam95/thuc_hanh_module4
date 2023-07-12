package com.example.thuc_hanh_md4.service;

import com.example.thuc_hanh_md4.model.Country;
import com.example.thuc_hanh_md4.repository.ICountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {
    @Autowired
    private ICountryRepository iCountryRepository;


    public List<Country> findAll() {
        return iCountryRepository.findAll();
    }


    public Optional<Country> findOne(Long aLong) {
        return iCountryRepository.findById(aLong);
    }


    public void save(Country country) {
        iCountryRepository.save(country);
    }

    public void delete(Long aLong) {
        iCountryRepository.deleteById(aLong);
    }
}
