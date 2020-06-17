package xyz.turtech.order.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
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

    @GetMapping("/cartItemsByOrderId/{orderId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getCartItemsByOrderId(@PathVariable String orderId) {
        Iterable<CartItem> cartItems = cartItemService.findByOrderId(orderId);

        return new ResponseEntity<>(cartItems, HttpStatus.OK);
    }
}
