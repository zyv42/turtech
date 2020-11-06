package xyz.turtech.order.controller;

import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.order.persistence.domain.CartItem;
import xyz.turtech.order.persistence.service.CartItemService;

@RestController
public class CartItemController {

    private final CartItemService cartItemService;

    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    @GetMapping("/users/{userId}/orders/{orderId}/cart-items")
    public ResponseEntity<?> getCartItemsByOrderId(
            @PathVariable String userId,
            @PathVariable Long orderId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            Iterable<CartItem> cartItems = cartItemService.findByOrderId(orderId);

            return new ResponseEntity<>(cartItems, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
}
