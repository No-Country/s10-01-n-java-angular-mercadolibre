package com.nocountry.ecommerce.model;

import com.nocountry.ecommerce.util.Category;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    private int id;
    @NotBlank
    private String name;
    private String description;
    @NotNull
    private Double price;
    private Category category;
}
