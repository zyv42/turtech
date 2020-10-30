package xyz.turtech.order.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.order.persistence.domain.CartItem;

@Repository
public interface CartItemRepository extends CrudRepository<CartItem, Long> {

    Iterable<CartItem> findByOrderId(Long orderId);
}
