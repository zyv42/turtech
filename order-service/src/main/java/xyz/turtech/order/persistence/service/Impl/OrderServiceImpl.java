package xyz.turtech.order.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.order.persistence.domain.Order;
import xyz.turtech.order.persistence.repository.OrderRepository;
import xyz.turtech.order.persistence.service.OrderService;

import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Optional<Order> findById(Long orderId) {
        return orderRepository.findById(orderId);
    }

    @Override
    public Iterable<Order> findByUserId(String userId) {
        return orderRepository.findByUserId(userId);
    }
}
