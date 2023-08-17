package com.nocountry.ecommerce.controller;

import com.nocountry.ecommerce.model.ShippingAddress;
import com.nocountry.ecommerce.service.ShippingAddressIMPL;
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
@RequestMapping("ShippingAddress")
public class ShippingAddressController {

    @Autowired
    private ShippingAddressIMPL saimpl;

    @GetMapping
    @RequestMapping(value = "shippingAddressList", method = RequestMethod.GET)
    public ResponseEntity<?> shippingAddressList() {

        List<ShippingAddress> list = this.saimpl.shippingAddressList();

        return ResponseEntity.ok(list);

    }
    
    @PostMapping
    @RequestMapping(value = "createShippingAddress", method = RequestMethod.POST)
    public ResponseEntity<?> createShippingAddress(@RequestBody ShippingAddress shippingAddress){
        
        ShippingAddress address = this.saimpl.createShippingAddress(shippingAddress);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(address);
        
    }
    
    @PutMapping
    @RequestMapping( value = "modifyShippingAddress", method = RequestMethod.PUT)
    public ResponseEntity<?> modifyShippingAddress(@RequestBody ShippingAddress shippingAddress){
        
        ShippingAddress address = this.saimpl.modifyShippingAddress(shippingAddress);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(address);
        
    }
    
    @GetMapping
    @RequestMapping(value = "consultShippingAddress/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> consultShippingAddress(@PathVariable int id){
        
        ShippingAddress address = this.saimpl.consultShippingAddress(id);
        
        return ResponseEntity.ok(address);
        
    }
    
    @DeleteMapping
    @RequestMapping(value = "deleteShippingAddress/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteShippingAddress(@PathVariable int id){
        
       this.saimpl.deleteShippingAddress(id);
       
       return ResponseEntity.ok().build();
        
    }
    
}