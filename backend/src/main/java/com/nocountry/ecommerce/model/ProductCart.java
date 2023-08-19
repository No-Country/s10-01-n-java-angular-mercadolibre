package com.nocountry.ecommerce.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "productCart")
public class ProductCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productCart_ID")
    private Integer orderId;
    /*@ManyToOne
    @JoinColumn(name = "user_Id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Product producto;*/

    @Column(name= "quantity")
    private Integer quantity;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    /*public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }*/

    /*public Product getProducto() {
        return producto;
    }*/

    /*public void setProducto(Product producto) {
        this.producto = producto;
    }*/

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "ProductCart{" +
                "orderId=" + orderId +
                /*", user=" + user +
                ", producto=" + producto +*/
                ", quantity=" + quantity +
                '}';
    }
}
