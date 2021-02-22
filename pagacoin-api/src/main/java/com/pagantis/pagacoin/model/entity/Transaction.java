package com.pagantis.pagacoin.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.Positive;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    private Wallet originWallet;

    @OneToOne
    private Wallet destinationWallet;

    @Positive
    private Double amount;

    public Transaction() {
        
    }

    public Transaction(Wallet originWallet, Wallet destinationWallet, Double amount) {
        this.originWallet = originWallet;
        this.destinationWallet = destinationWallet;
        this.amount = amount;
    }

    public Integer getId() {
        return id;
    }

    public Wallet getOriginWallet() {
        return originWallet;
    }

    public void setOriginWallet(Wallet originWallet) {
        this.originWallet = originWallet;
    }

    public Wallet getDestinationWallet() {
        return destinationWallet;
    }

    public void setDestinationWallet(Wallet destinationWallet) {
        this.destinationWallet = destinationWallet;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Transaction [amount=" + amount + ", destinationWallet=" + destinationWallet + ", id=" + id
                + ", originWallet=" + originWallet + "]";
    }

}
