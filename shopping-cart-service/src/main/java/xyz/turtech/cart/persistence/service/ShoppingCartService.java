package xyz.turtech.cart.persistence.service;

import xyz.turtech.cart.persistence.domain.ShoppingCart;
import xyz.turtech.cart.persistence.domain.User;

import java.security.Principal;
import java.util.Optional;

public interface ShoppingCartService {

    ShoppingCart createShoppingCart(User user, String sessionId);
    ShoppingCart updateShoppingCart(ShoppingCart shoppingCart);
    ShoppingCart save(ShoppingCart shoppingCart);
    void clearShoppingCart(ShoppingCart shoppingCart);
}
