package com.eugenarium.account.persistence.service;

import com.eugenarium.account.persistence.domain.User;

import java.util.Optional;

public interface UserService {

    Optional<User> findByUsername(String username);

    User createUser(User newUser);
    void updateUser(User update);
}
