package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.User;

import java.util.Optional;

public interface UserService {

    Optional<User> findByUsername(String username);

    User createUser(User newUser);
    void updateUser(String username, User update);
}
