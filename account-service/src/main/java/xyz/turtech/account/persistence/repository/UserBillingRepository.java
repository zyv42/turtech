package xyz.turtech.account.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.account.persistence.domain.UserBilling;

import java.util.Optional;

@Repository
public interface UserBillingRepository extends JpaRepository<UserBilling, Long> {

    Optional<UserBilling> findByUserPaymentId(Long userPaymentId);
}
