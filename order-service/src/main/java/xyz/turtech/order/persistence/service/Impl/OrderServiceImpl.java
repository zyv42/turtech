package xyz.turtech.order.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.order.persistence.domain.Order;
import xyz.turtech.order.persistence.repository.OrderRepository;
import xyz.turtech.order.persistence.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Iterable<Order> findByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }
}
