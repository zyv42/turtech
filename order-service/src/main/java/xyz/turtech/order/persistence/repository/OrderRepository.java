package xyz.turtech.order.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.order.persistence.domain.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    Iterable<Order> findByUserId(Long userId);
}
