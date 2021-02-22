package com.pagantis.pagacoin.controller;

import java.util.List;

import com.pagantis.pagacoin.model.api.UserApi;
import com.pagantis.pagacoin.model.entity.User;
import com.pagantis.pagacoin.model.entity.Wallet;
import com.pagantis.pagacoin.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<UserApi> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/users/{id}/wallets")
    public List<Wallet> getWalletsByUser(@PathVariable Integer id) {
        return userService.getWalletsByUser(id);
    }

}
