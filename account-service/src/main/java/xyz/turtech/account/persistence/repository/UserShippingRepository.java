package xyz.turtech.account.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.account.persistence.domain.UserShipping;

@Repository
public interface UserShippingRepository extends JpaRepository<UserShipping, Long> {

    Iterable<UserShipping> findByUserId(Long userId);
}
