package com.pagantis.pagacoin.repository;

import com.pagantis.pagacoin.model.entity.Wallet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Integer> {

}
