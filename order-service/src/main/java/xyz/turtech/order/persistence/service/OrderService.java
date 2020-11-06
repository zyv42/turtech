package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.Order;

public interface OrderService {

    Order findById(Long orderId);
    Iterable<Order> findByUserId(String userId);
}
