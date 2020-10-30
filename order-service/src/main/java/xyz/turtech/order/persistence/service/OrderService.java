package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.Order;

import java.util.Optional;

public interface OrderService {

    Optional<Order> findById(Long orderId);
    Iterable<Order> findByUserId(Long userId);
}
