package com.eugenarium.auth.persistence.repository;

import com.eugenarium.auth.persistence.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {
}
