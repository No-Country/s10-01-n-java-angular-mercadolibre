package com.nocountry.ecommerce.service;

import com.nocountry.ecommerce.model.Client;
import com.nocountry.ecommerce.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public class ClientService {
    private final ClientRepository clientRepository;
    HashMap<String, Object> response = new HashMap<>();
    @Autowired
    public ClientService(ClientRepository clientRepository){
        this.clientRepository = clientRepository;
    }
    public List<Client> getClients() {
        return this.clientRepository.findAll();
    }

    public ResponseEntity<Object> newClient(Client client){
        this.clientRepository.save(client);
        response.put("success", true);
        response.put("message:", "Cliente creada");
        return new ResponseEntity<>(
                HttpStatus.CREATED
        );
    }

    public String updateClient(long id, Client client){
        Optional<Client> isExist = this.clientRepository.findById(id);
        Client updateClient = clientRepository.findById(id).get();
        return "Cliente actualizado satisfactoriamente";
    }
}
