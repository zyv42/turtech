package xyz.turtech.order.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.order.persistence.domain.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {

    Iterable<Order> findByUserId(String userId);
}
