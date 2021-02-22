package com.pagantis.pagacoin.service;

import java.util.List;

import javax.validation.Valid;

import com.pagantis.pagacoin.model.api.TransactionApi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface TransactionService {
    public List<TransactionApi> getTransactions();
    public ResponseEntity<Object> createTransaction(@Valid @RequestBody TransactionApi transactionApi);
}
