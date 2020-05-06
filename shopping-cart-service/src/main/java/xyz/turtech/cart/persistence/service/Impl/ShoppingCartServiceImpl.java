package xyz.turtech.cart.persistence.service.Impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.turtech.cart.persistence.domain.CartItem;
import xyz.turtech.cart.persistence.domain.ShoppingCart;
import xyz.turtech.cart.persistence.domain.User;
import xyz.turtech.cart.persistence.repository.ShoppingCartRepository;
import xyz.turtech.cart.persistence.service.CartItemService;
import xyz.turtech.cart.persistence.service.ShoppingCartService;

import java.math.BigDecimal;
import java.util.Optional;

@Service
@Transactional
public class ShoppingCartServiceImpl implements ShoppingCartService {

    private final ShoppingCartRepository shoppingCartRepository;
    private final CartItemService cartItemService;

    public ShoppingCartServiceImpl(ShoppingCartRepository shoppingCartRepository,
                                   CartItemService cartItemService) {
        this.shoppingCartRepository = shoppingCartRepository;
        this.cartItemService = cartItemService;
    }

    //TODO check is Principal name in Spring Security returns username or Id and change method accordingly
    @Override
    public ShoppingCart createShoppingCart(User user, String sessionId) {
        if (user == null) {
            Optional<ShoppingCart> shoppingCart = shoppingCartRepository.findById(sessionId);
            if (shoppingCart.isPresent()) {
                return shoppingCart.get();
            } else {
                ShoppingCart newShoppingCart = new ShoppingCart();
                newShoppingCart.setUserId(null);
                newShoppingCart.setId(sessionId);
                newShoppingCart.setGrandTotal(BigDecimal.valueOf(0));
                return newShoppingCart;
            }
        } else {
            Optional<ShoppingCart> shoppingCart = shoppingCartRepository.getByUserId(user.getUsername());
            if(shoppingCart.isPresent()) {
                return shoppingCart.get();
            } else {
                ShoppingCart newShoppingCart = new ShoppingCart();
                newShoppingCart.setUserId(user.getUsername());
                newShoppingCart.setId(sessionId);
                newShoppingCart.setGrandTotal(BigDecimal.valueOf(0));
                return newShoppingCart;
            }
        }
    }

    @Override
    public ShoppingCart updateShoppingCart(ShoppingCart shoppingCart) {
        BigDecimal cartTotal = BigDecimal.valueOf(0);

        Iterable<CartItem> cartItems = cartItemService.findByShoppingCartId(shoppingCart.getId());

        for (CartItem cartItem : cartItems) {
            if (cartItem.getProduct().getInStockNumber() > 0) {
                cartItemService.updateCartItem(cartItem);
                cartTotal = cartTotal.add(cartItem.getSubtotal());
            }
        }

        shoppingCart.setGrandTotal(cartTotal);
        shoppingCartRepository.save(shoppingCart);

        return shoppingCart;
    }

    @Override
    public ShoppingCart save(ShoppingCart shoppingCart) {
        return shoppingCartRepository.save(shoppingCart);
    }

    @Override
    public void clearShoppingCart(ShoppingCart shoppingCart) {
        Iterable<CartItem> cartItems = cartItemService.findByShoppingCartId(shoppingCart.getId());

        for (CartItem cartItem : cartItems) {
            cartItem.setShoppingCartId(null);
            cartItemService.save(cartItem);
        }

        shoppingCart.setGrandTotal(BigDecimal.valueOf(0));
        shoppingCartRepository.save(shoppingCart);
    }
}
