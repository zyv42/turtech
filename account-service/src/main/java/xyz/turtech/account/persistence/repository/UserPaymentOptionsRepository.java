package xyz.turtech.account.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.account.persistence.domain.UserPaymentOption;

@Repository
public interface UserPaymentOptionsRepository extends JpaRepository<UserPaymentOption, Long> {

    Iterable<UserPaymentOption> findByUserId(String userId);
}
