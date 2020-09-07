package xyz.turtech.order.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.order.persistence.domain.CartItem;
import xyz.turtech.order.persistence.repository.CartItemRepository;
import xyz.turtech.order.persistence.service.CartItemService;

@Service
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    public CartItemServiceImpl(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    @Override
    public Iterable<CartItem> findByOrderId(Long orderId) {
        return cartItemRepository.findByOrderId(orderId);
    }
}
