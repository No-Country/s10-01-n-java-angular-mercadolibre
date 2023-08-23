package com.nocountry.ecommerce.controller;

import com.nocountry.ecommerce.model.Client;
import com.nocountry.ecommerce.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("api/client")
public class ClientController {
    @Autowired
    ClientService clientService;


    @GetMapping
    public ResponseEntity<List<Client>> getCLients(){

        List<Client> listaClientes = clientService.getClients();
        return new ResponseEntity<>(listaClientes, HttpStatus.OK);
    }
}
