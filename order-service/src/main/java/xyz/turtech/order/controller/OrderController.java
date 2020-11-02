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
import java.util.List;
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

    @GetMapping("/userOrders")
    public ResponseEntity<?> getOrders() {
        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        Iterable<Order> orders = orderService.findByUserId(token.getName());

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/userOrders/{userId}")
    public ResponseEntity<?> getOrdersByUserId(@PathVariable String userId) {
        Iterable<Order> orders = orderService.findByUserId(userId);

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/userOrders/{orderId}")
    public ResponseEntity<?> getOrderDetails(@PathVariable Long orderId) {

        Order currentOrder = orderService.findById(orderId).get();
        BillingAddress billingAddress = billingAddressService.findById(currentOrder.getBillingAddressId()).get();
        ShippingAddress shippingAddress = shippingAddressService.findById(currentOrder.getShippingAddressId()).get();
        PaymentOption paymentOption = paymentOptionService.findById(currentOrder.getPaymentOptionId()).get();
        Iterable<CartItem> cartItems = cartItemService.findByOrderId(orderId);

        Map<String, Object> orderDetails = new HashMap<>();
        orderDetails.put("order", currentOrder);
        orderDetails.put("billingAddress", billingAddress);
        orderDetails.put("shippingAddress", shippingAddress);
        orderDetails.put("paymentOption", paymentOption);
        orderDetails.put("cartItems", cartItems);

        return new ResponseEntity<>(orderDetails, HttpStatus.OK);
    }
}
