package xyz.turtech.cart.persistence.service;

import xyz.turtech.cart.persistence.domain.CartItem;

import java.math.BigDecimal;

public interface CartItemService {

    Iterable<CartItem> findByShoppingCartId(String shoppingCartId);
    CartItem findById(String id);
    CartItem addProductToCartItem(String productId, String shoppingCartId, int qty);
    CartItem save(CartItem cartItem);
    CartItem updateCartItem(CartItem cartItem);
    void deleteCartItem(CartItem cartItem);
}
