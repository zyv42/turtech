package xyz.turtech.account.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.account.persistence.domain.UserPayment;

@Repository
public interface UserPaymentRepository extends JpaRepository<UserPayment, Long> {

    Iterable<UserPayment> findByUserId(Long userId);
}
