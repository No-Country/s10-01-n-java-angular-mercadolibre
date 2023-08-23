package com.nocountry.ecommerce.controller;

import com.nocountry.ecommerce.model.Client;
import com.nocountry.ecommerce.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<Object> createClient(@RequestBody Client client){
        return this.clientService.newClient(client);
    }

    @PutMapping(value= "/{id}")
    public String updateClient(@PathVariable long id, @RequestBody Client client){
        return this.clientService.updateClient(id, client);
    }

    @DeleteMapping(value= "/{id}")
    public String deleteClient(@PathVariable long id){
        return this.clientService.deleteClient(id);
    }
}
