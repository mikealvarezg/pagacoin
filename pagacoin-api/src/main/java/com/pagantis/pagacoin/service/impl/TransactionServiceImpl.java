package com.pagantis.pagacoin.service.impl;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.pagantis.pagacoin.exception.NotAcceptableValuesException;
import com.pagantis.pagacoin.exception.ResourceNotFoundException;
import com.pagantis.pagacoin.model.api.TransactionApi;
import com.pagantis.pagacoin.model.entity.Transaction;
import com.pagantis.pagacoin.model.entity.Wallet;
import com.pagantis.pagacoin.repository.TransactionRepository;
import com.pagantis.pagacoin.repository.WalletRepository;
import com.pagantis.pagacoin.service.TransactionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private WalletRepository walletRepository;

    @Override
    public List<TransactionApi> getTransactions() {
        return transactionRepository.findAll().stream().map(transactionRepository -> {
            return new TransactionApi(
                transactionRepository.getId(),
                transactionRepository.getOriginWallet().getId(),
                transactionRepository.getDestinationWallet().getId(),
                transactionRepository.getAmount());
        }).collect(Collectors.toList());
    }

    @Override
    public ResponseEntity<Object> createTransaction(@Valid TransactionApi transactionApi) {
        Optional<Wallet> originWallet = walletRepository.findById(transactionApi.getOriginWalletId());

        if (!originWallet.isPresent()) {
            throw new ResourceNotFoundException("The origin wallet was not found");
        }

        if (originWallet.get().getBalance() < transactionApi.getAmount()) {
            throw new NotAcceptableValuesException("The origin wallet balance is minor than the transaction amount");
        }

        Optional<Wallet> destinationWallet = walletRepository.findById(transactionApi.getDestinationWalletId());

        if (!destinationWallet.isPresent()) {
            throw new ResourceNotFoundException("The destination wallet was not found");
        }

        originWallet.get().setBalance(originWallet.get().getBalance() - transactionApi.getAmount());
        walletRepository.save(originWallet.get());

        destinationWallet.get().setBalance(destinationWallet.get().getBalance() + transactionApi.getAmount());
        walletRepository.save(destinationWallet.get());

        Transaction transaction = new Transaction(originWallet.get(), destinationWallet.get(),
                transactionApi.getAmount());
        transactionRepository.save(transaction);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(transaction.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

}
