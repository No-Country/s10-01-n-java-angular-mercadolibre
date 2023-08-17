package com.nocountry.ecommerce.model;

public class Client {
    private String name;
    private String email;
    private String password;
    private String address;
    private String contactDetalls;
    private RolTipe rol;
    private String productToSell;

    public Client(String name, String email, String password, String address, String contactDetalls, RolTipe rol, String productToSell) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.contactDetalls = contactDetalls;
        this.rol = rol;
        this.productToSell = productToSell;
    }
}


enum RolTipe{
    ADMIN,
    USER
}