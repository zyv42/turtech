package xyz.turtech.order.persistence.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.order.persistence.domain.CartItem;

@Repository
public interface CartItemRepository extends MongoRepository<CartItem, String> {

    Iterable<CartItem> findByOrderId(String orderId);
}
