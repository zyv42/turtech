package xyz.turtech.account.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import xyz.turtech.account.persistence.domain.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
}
