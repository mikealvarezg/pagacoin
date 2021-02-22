package com.pagantis.pagacoin.controller;

import java.util.List;

import javax.validation.Valid;

import com.pagantis.pagacoin.model.api.TransactionApi;
import com.pagantis.pagacoin.service.TransactionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/transactions")
    public List<TransactionApi> getTransactions() {
        return transactionService.getTransactions();
    }

    @PostMapping("/transactions")
    public ResponseEntity<Object> createTransaction(@Valid @RequestBody TransactionApi transactionApi) {
        return transactionService.createTransaction(transactionApi);
    }
}
