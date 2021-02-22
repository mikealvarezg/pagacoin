package com.pagantis.pagacoin.service;

import java.util.List;

import com.pagantis.pagacoin.model.api.UserApi;
import com.pagantis.pagacoin.model.entity.User;
import com.pagantis.pagacoin.model.entity.Wallet;

import org.springframework.web.bind.annotation.PathVariable;

public interface UserService {
    public List<UserApi> getUsers();
    public List<Wallet> getWalletsByUser(@PathVariable Integer id);
}
