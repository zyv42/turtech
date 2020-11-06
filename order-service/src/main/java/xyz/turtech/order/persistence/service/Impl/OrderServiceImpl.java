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
    public Order findById(Long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found - " + orderId));
    }

    @Override
    public Iterable<Order> findByUserId(String userId) {
        return orderRepository.findByUserId(userId);
    }
}
