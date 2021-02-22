package com.pagantis.pagacoin.model.api;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

public class TransactionApi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    private Integer originWalletId;

    @OneToOne
    private Integer destinationWalletId;

    @NotNull
    @Positive
    private Double amount;

    public TransactionApi() {

    }

    public TransactionApi(Integer originWalletId, Integer destinationWalletId, Double amount) {
        this.originWalletId = originWalletId;
        this.destinationWalletId = destinationWalletId;
        this.amount = amount;
    }

    public TransactionApi(Integer id, Integer originWalletId, Integer destinationWalletId, Double amount) {
        this.id = id;
        this.originWalletId = originWalletId;
        this.destinationWalletId = destinationWalletId;
        this.amount = amount;
    }

    public Integer getId() {
        return id;
    }

    public Integer getOriginWalletId() {
        return originWalletId;
    }

    public Integer getDestinationWalletId() {
        return destinationWalletId;
    }

    public Double getAmount() {
        return amount;
    }

}
