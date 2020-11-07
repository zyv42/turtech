package xyz.turtech.order.controller;

import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.order.persistence.domain.*;
import xyz.turtech.order.persistence.service.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class OrderController {

    private final OrderService orderService;
    private final BillingAddressService billingAddressService;
    private final ShippingAddressService shippingAddressService;
    private final PaymentOptionService paymentOptionService;
    private final CartItemService cartItemService;

    public OrderController(OrderService orderService,
                           BillingAddressService billingAddressService,
                           ShippingAddressService shippingAddressService,
                           PaymentOptionService paymentOptionService,
                           CartItemService cartItemService) {
        this.orderService = orderService;
        this.billingAddressService = billingAddressService;
        this.shippingAddressService = shippingAddressService;
        this.paymentOptionService = paymentOptionService;
        this.cartItemService = cartItemService;
    }

    @GetMapping("/users/{userId}/orders")
    public ResponseEntity<?> getOrdersByUserId(
            @PathVariable String userId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            Iterable<Order> orders = orderService.findByUserId(userId);

            return new ResponseEntity<>(orders, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/users/{userId}/orders/{orderId}")
    public ResponseEntity<?> getOrderDetailsByOrderId(
            @PathVariable String userId,
            @PathVariable Long orderId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            Order order = orderService.findById(orderId);
            BillingAddress billingAddress = billingAddressService.findById(order.getBillingAddressId());
            ShippingAddress shippingAddress = shippingAddressService.findById(order.getShippingAddressId());
            PaymentOption paymentOption = paymentOptionService.findById(order.getPaymentOptionId());
            Iterable<CartItem> cartItems = cartItemService.findByOrderId(orderId);

            Map<String, Object> orderDetails = new HashMap<>();
            orderDetails.put("order", order);
            orderDetails.put("billingAddress", billingAddress);
            orderDetails.put("shippingAddress", shippingAddress);
            orderDetails.put("paymentOption", paymentOption);
            orderDetails.put("cartItems", cartItems);

            return new ResponseEntity<>(orderDetails, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
}
