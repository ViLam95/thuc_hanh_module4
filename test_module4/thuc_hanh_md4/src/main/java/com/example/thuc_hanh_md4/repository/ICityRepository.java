package com.example.thuc_hanh_md4.repository;

import com.example.thuc_hanh_md4.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICityRepository extends JpaRepository<City, Long> {
}
