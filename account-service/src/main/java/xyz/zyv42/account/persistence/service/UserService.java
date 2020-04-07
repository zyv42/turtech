package xyz.zyv42.account.persistence.service;

import xyz.zyv42.account.persistence.domain.User;

import java.util.Optional;

public interface UserService {

    Optional<User> findByUsername(String username);

    User createUser(User newUser);
    void updateUser(String username, User update);
}
