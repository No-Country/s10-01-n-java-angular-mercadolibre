package com.nocountry.ecommerce.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DiscriminatorColumn(name="entity", discriminatorType= DiscriminatorType.STRING)
@Entity
@Table(name = "CLIENT")
public class Client {
    @Id
    @Column(name = "client_uuid")
    private String clientUuid;
    private String name;
    @Column(name = "email", nullable = false,unique = true)
    @Email(message = "Please enter a valid email!")
    private String email;
    @Column(name = "password", nullable = false)
    private String password;
    private String address;
    private String contactDetalls;
    @Enumerated(EnumType.STRING)
    @Column(name = "rol", nullable = false)
    private RolTipe rol;

    public Client(){}
    public Client(String clientUuid, String name, String email, String password, String address, String contactDetalls, RolTipe rol) {
        this.clientUuid = clientUuid;
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.contactDetalls = contactDetalls;
        this.rol = rol;
    }
}


enum RolTipe{
    ADMIN,
    USER
}