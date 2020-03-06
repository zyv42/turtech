package com.eugenarium.auth.persistence.service.Impl;

import com.eugenarium.auth.persistence.domain.User;
import com.eugenarium.auth.persistence.repository.UserRepository;
import com.eugenarium.auth.persistence.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final Logger log = LoggerFactory.getLogger(getClass());

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    private final UserRepository repository;

    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(User user) {

        Optional<User> existing = repository.findById(user.getId());
        existing.ifPresent(present ->
            {throw new IllegalArgumentException("user already exists:" + present.getUsername());});

        String hash = encoder.encode(user.getPassword());
        user.setPassword(hash);

        repository.save(user);

        log.info("new user has been created: {}", user.getUsername());
    }
}
