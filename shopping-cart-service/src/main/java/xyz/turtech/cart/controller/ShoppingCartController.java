package xyz.turtech.cart.controller;

import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.cart.persistence.service.CartItemService;
import xyz.turtech.cart.persistence.service.ShoppingCartService;

@RestController
public class ShoppingCartController {

    private final CartItemService cartItemService;
    private final ShoppingCartService shoppingCartService;

    public ShoppingCartController(CartItemService cartItemService,
                                  ShoppingCartService shoppingCartService) {
        this.cartItemService = cartItemService;
        this.shoppingCartService = shoppingCartService;
    }
}
