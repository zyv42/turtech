package xyz.turtech.cart.persistence.service.Impl;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.turtech.cart.client.ProductServiceClient;
import xyz.turtech.cart.persistence.domain.CartItem;
import xyz.turtech.cart.persistence.domain.Product;
import xyz.turtech.cart.persistence.repository.CartItemRepository;
import xyz.turtech.cart.persistence.service.CartItemService;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;
    private final ProductServiceClient productServiceClient;

    public CartItemServiceImpl(CartItemRepository cartItemRepository,
                               @Qualifier("product-service") ProductServiceClient productServiceClient) {
        this.cartItemRepository = cartItemRepository;
        this.productServiceClient = productServiceClient;
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
    public CartItem addProductToCartItem(String productId, String shoppingCartId, int qty) {
        Iterable<CartItem> cartItems = findByShoppingCartId(shoppingCartId);

        for (CartItem cartItem : cartItems) {
            if (productId.equals(cartItem.getProduct().getId())) {
                cartItem.setQty(cartItem.getQty() + qty);
                cartItem.setSubtotal(BigDecimal.valueOf(cartItem.getProduct().getOurPrice())
                        .multiply(BigDecimal.valueOf(qty + cartItem.getQty())));
                cartItemRepository.save(cartItem);
                return cartItem;
            }
        }

        Product product = productServiceClient.getProduct(productId).get();
        CartItem cartItem = new CartItem();
        cartItem.setShoppingCartId(shoppingCartId);
        cartItem.setProduct(product);
        cartItem.setQty(qty);
        cartItem.setSubtotal(BigDecimal.valueOf(product.getOurPrice()).multiply(BigDecimal.valueOf(qty)));
        cartItem = cartItemRepository.save(cartItem);

        return cartItem;
    }

    @Override
    public CartItem save(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    @Override
    public CartItem updateCartItem(CartItem cartItem) {
        BigDecimal bigDecimal = BigDecimal.valueOf(cartItem.getProduct().getOurPrice())
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
