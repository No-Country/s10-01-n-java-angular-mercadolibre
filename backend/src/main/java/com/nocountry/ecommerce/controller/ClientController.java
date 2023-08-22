package com.nocountry.ecommerce.controller;

import com.nocountry.ecommerce.model.Client;
import com.nocountry.ecommerce.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping(path= "api/client")
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @GetMapping
    public List<Client> getCLients(){
        return this.clientService.getClients();
    }
}
