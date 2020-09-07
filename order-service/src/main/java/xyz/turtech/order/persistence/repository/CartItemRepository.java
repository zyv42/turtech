package xyz.turtech.order.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.order.persistence.domain.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    Iterable<CartItem> findByOrderId(Long orderId);
}
