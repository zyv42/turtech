package xyz.turtech.account.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.account.persistence.domain.UserBillingAddress;

import java.util.Optional;

@Repository
public interface UserBillingAddressRepository extends JpaRepository<UserBillingAddress, Long> {
}
