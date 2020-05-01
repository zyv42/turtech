package xyz.turtech.cart.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.cart.persistence.domain.CartItem;

@Repository
public interface CartItemRepository extends CrudRepository<CartItem, String> {

    Iterable<CartItem> findByShoppingCartId(String shoppingCartId);
}
