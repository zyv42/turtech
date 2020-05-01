package xyz.turtech.cart.persistence.service.Impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.turtech.cart.persistence.domain.CartItem;
import xyz.turtech.cart.persistence.repository.CartItemRepository;
import xyz.turtech.cart.persistence.service.CartItemService;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    public CartItemServiceImpl(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    @Override
    public Iterable<CartItem> findByShoppingCartId(String shoppingCartId) {
        return cartItemRepository.findByShoppingCartId(shoppingCartId);
    }

    @Override
    public CartItem findById(String id) {
        return cartItemRepository.findById(id).get();
    }

    @Override
    public CartItem addProductToCartItem(String productId, int productInStock, BigDecimal productPrice,
                                         String shoppingCartId, int qty) {
        Iterable<CartItem> cartItems = findByShoppingCartId(shoppingCartId);
        for (CartItem cartItem : cartItems) {
            if (productId.equals(cartItem.getProductId())) {
                cartItem.setQty(cartItem.getQty() + qty);
                cartItem.setSubtotal(cartItem.getSingleItemPrice().multiply(BigDecimal.valueOf(qty + cartItem.getQty())));
                cartItemRepository.save(cartItem);
                return cartItem;
            }
        }
        CartItem cartItem = new CartItem();
        cartItem.setShoppingCartId(shoppingCartId);
        cartItem.setProductInStock(productInStock);
        cartItem.setProductId(productId);
        cartItem.setQty(qty);
        cartItem.setSubtotal(productPrice.multiply(BigDecimal.valueOf(qty)));
        cartItem = cartItemRepository.save(cartItem);

        return cartItem;
    }

    @Override
    public CartItem save(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    @Override
    public CartItem updateCartItem(CartItem cartItem) {
        BigDecimal bigDecimal = cartItem.getSingleItemPrice()
                .multiply(new BigDecimal(cartItem.getQty()));
        bigDecimal = bigDecimal.setScale(2, RoundingMode.HALF_UP);
        cartItem.setSubtotal(bigDecimal);
        cartItemRepository.save(cartItem);

        return cartItem;
    }

    @Override
    public void deleteCartItem(CartItem cartItem) {
        cartItemRepository.delete(cartItem);
    }
}
