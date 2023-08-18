package com.nocountry.ecommerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "payment_method")
public class PaymentMethod {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_ID")
    private int ID;
    @Column(name = "card_type", nullable = false)
    private String cardType;
    @Column(name = "card_number", nullable = false, unique = true)
    private String cardNumber;
    @Column(name = "expiration_date", nullable = false)
    private String expirationDate;
    @Column(name = "security_code", nullable = false)
    private String securityCode;
    @Column(name = "billing_address", nullable = false)
    private String billingAddress;
}
