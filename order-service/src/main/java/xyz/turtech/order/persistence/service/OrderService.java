package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.Order;

public interface OrderService {

    Iterable<Order> findByUserId(Long userId);
}
