package com.eugenarium.account.persistence.service.Impl;

import com.eugenarium.account.persistence.domain.User;
import com.eugenarium.account.persistence.repository.UserRepository;
import com.eugenarium.account.persistence.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final Logger log = LoggerFactory.getLogger(getClass());

    private final UserRepository userRepository;
    private final AuthServiceClient authClient;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User createUser(User user) {
        Optional<User> existing = userRepository.findByUsername(user.getUsername());
        Assert.isNull(existing, "user account already exists: " + user.getUsername());

        authClient.createUser(user);
        userRepository.save(user);

        log.info("new user account has been created: " + user.getUsername());

        return user;
    }

    @Override
    public void updateUser(User update) {
        Optional<User> found = userRepository.findByUsername(update.getUsername());
        Assert.notNull(found, "can't find user account with username: " + update.getUsername());
        User user = found.get();

        user.setUsername(update.getUsername());
        userRepository.save(user);

        log.debug("user account {} changes has been saved", user.getUsername());
    }
}
