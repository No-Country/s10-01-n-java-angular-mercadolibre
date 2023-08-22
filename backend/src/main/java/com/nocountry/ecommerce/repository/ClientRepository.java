package com.nocountry.ecommerce.repository;

import com.nocountry.ecommerce.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
