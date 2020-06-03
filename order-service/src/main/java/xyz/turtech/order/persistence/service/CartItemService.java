package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.CartItem;

public interface CartItemService {

    Iterable<CartItem> findByOrderId(String orderId);
}
