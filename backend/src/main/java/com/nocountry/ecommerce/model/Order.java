package com.nocountry.ecommerce.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name ="`order`")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_Id")
    private Integer orderId;

/*    @ManyToOne
    @JoinColumn(name = "user_Id")
    private User user;*/
    @ManyToOne
    @JoinColumn(name = "payment_Method_Id")
    private PaymentMethod payment_Method_Id;
    @OneToOne
    @JoinColumn(name = "shipping_Address_Id")
    private ShippingAddress shippingAddress;
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<ProductCart> productCarts;
    @Column(name = "status")
    private String orderStatus;
    @Column(name = "total")
    private Double total;
    @Column(name = "date")
    private String date;
    @Column(name = "description")
    private String description;
    @Column(name = "payment_Method")
    private String paymentMethod;

    //Constructor
    public Order() {

    }

    public Order(Integer orderId, User user_Id, PaymentMethod payment_Method_Id, ShippingAddress shippingAddress,
                 List<ProductCart> productCarts, String orderStatus, Double total, String date, String description, String paymentMethod) {
        this.orderId = orderId;
//        this.user = user_Id;
        this.payment_Method_Id = payment_Method_Id;
        this.shippingAddress = shippingAddress;
        this.productCarts = productCarts;
        this.orderStatus = orderStatus;
        this.total = total;
        this.date = date;
        this.description = description;
        this.paymentMethod = paymentMethod;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

//    public User getUser_Id() {
//        return user;
//    }

//    public void setUser_Id(User user_Id) {
//        this.user = user_Id;
//    }

    public PaymentMethod getPayment_Method_Id() {
        return payment_Method_Id;
    }

    public void setPayment_Method_Id(PaymentMethod payment_Method_Id) {
        this.payment_Method_Id = payment_Method_Id;
    }

    public ShippingAddress getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(ShippingAddress shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public List<ProductCart> getProductCarts() {
        return productCarts;
    }

    public void setProductCarts(List<ProductCart> productCarts) {
        this.productCarts = productCarts;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
//                ", user_Id=" + user +
                ", payment_Method_Id=" + payment_Method_Id +
                ", shippingAddress=" + shippingAddress +
                ", productCarts=" + productCarts +
                ", orderStatus='" + orderStatus + '\'' +
                ", total=" + total +
                ", date='" + date + '\'' +
                ", description='" + description + '\'' +
                ", paymentMethod='" + paymentMethod + '\'' +
                '}';
    }
}