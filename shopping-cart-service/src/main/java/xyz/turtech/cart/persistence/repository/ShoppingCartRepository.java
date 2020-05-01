package xyz.turtech.cart.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.cart.persistence.domain.ShoppingCart;

import java.util.Optional;

@Repository
public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, String> {

    Optional<ShoppingCart> getByUserId(String userId);
}
