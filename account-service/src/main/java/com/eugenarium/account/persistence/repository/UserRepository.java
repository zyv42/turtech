package com.eugenarium.account.persistence.repository;

import com.eugenarium.account.persistence.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {

    Optional<User> findByUsername(String username);
}
