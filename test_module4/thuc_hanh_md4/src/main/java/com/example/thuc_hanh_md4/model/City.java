package com.example.thuc_hanh_md4.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @ManyToOne
    private Country country;
    private double area;
    private double population;
    private double GDP;
    @Column(columnDefinition = "LONGTEXT")
    private String description;

}
