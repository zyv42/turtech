package xyz.turtech.order.persistence.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.order.persistence.domain.Order;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {

    Iterable<Order> findByUserId(String userId);
}
