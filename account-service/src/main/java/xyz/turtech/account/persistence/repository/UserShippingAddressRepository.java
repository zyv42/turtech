package xyz.turtech.account.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.account.persistence.domain.UserShippingAddress;

@Repository
public interface UserShippingAddressRepository extends JpaRepository<UserShippingAddress, Long> {

    Iterable<UserShippingAddress> findByUserId(String userId);
}
