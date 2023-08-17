package com.nocountry.ecommerce.controller;

import com.nocountry.ecommerce.model.PaymentMethod;
import com.nocountry.ecommerce.service.PaymentMethodIMPL;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("PaymentMethod")
public class PaymentMethodController {

    @Autowired
    PaymentMethodIMPL pmimpl;

    @GetMapping
    @RequestMapping(value = "paymentMethodList", method = RequestMethod.GET)
    public ResponseEntity<?> paymentMethodList() {

        List<PaymentMethod> list = this.pmimpl.paymentMethodList();

        return ResponseEntity.ok(list);

    }

    @PostMapping
    @RequestMapping(value = "createPaymentMethod", method = RequestMethod.POST)
    public ResponseEntity<?> createPaymentMethod(@RequestBody PaymentMethod paymentMethod) {

        PaymentMethod payment = this.pmimpl.createPaymentMethod(paymentMethod);

        return ResponseEntity.status(HttpStatus.CREATED).body(payment);
    }

    @PutMapping
    @RequestMapping(value = "modifyPaymentMethod", method = RequestMethod.PUT)
    public ResponseEntity<?> modifyPaymentMethod(@RequestBody PaymentMethod paymentMethod) {

        PaymentMethod Payment = this.pmimpl.modifyPaymentMethod(paymentMethod);

        return ResponseEntity.status(HttpStatus.CREATED).body(Payment);
    }

    @GetMapping
    @RequestMapping(value = "consultPaymentMethod/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> consultPaymentMethod(@PathVariable int id) {

        PaymentMethod payment = this.pmimpl.consultPaymentMethod(id);

        return ResponseEntity.ok(payment);

    }

    @DeleteMapping
    @RequestMapping(value = "deletePaymentMethod/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deletePaymentMethod(@PathVariable int id) {

        this.pmimpl.deletePaymentMethod(id);

        return ResponseEntity.ok().build();

    }
}