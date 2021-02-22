package com.pagantis.pagacoin.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.pagantis.pagacoin.exception.ResourceNotFoundException;
import com.pagantis.pagacoin.model.api.UserApi;
import com.pagantis.pagacoin.model.entity.User;
import com.pagantis.pagacoin.model.entity.Wallet;
import com.pagantis.pagacoin.repository.UserRepository;
import com.pagantis.pagacoin.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserApi> getUsers() {
        return userRepository.findAll().stream().map(user ->
            new UserApi(user.getId(), user.getName())
        ).collect(Collectors.toList());
    }

    @Override
    public List<Wallet> getWalletsByUser(Integer id) {
        Optional<User> user = userRepository.findById(id);

        if (!user.isPresent()) {
            throw new ResourceNotFoundException("The user was not found");
        }

        return user.get().getWallets();
    }

}
