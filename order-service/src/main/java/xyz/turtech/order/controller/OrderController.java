package xyz.turtech.order.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.order.persistence.domain.BillingAddress;
import xyz.turtech.order.persistence.domain.Order;
import xyz.turtech.order.persistence.domain.PaymentOption;
import xyz.turtech.order.persistence.domain.ShippingAddress;
import xyz.turtech.order.persistence.service.BillingAddressService;
import xyz.turtech.order.persistence.service.OrderService;
import xyz.turtech.order.persistence.service.PaymentOptionService;
import xyz.turtech.order.persistence.service.ShippingAddressService;

import java.util.HashMap;
import java.util.Map;

@RestController
public class OrderController {

    private final OrderService orderService;
    private final BillingAddressService billingAddressService;
    private final ShippingAddressService shippingAddressService;
    private final PaymentOptionService paymentOptionService;

    public OrderController(OrderService orderService,
                           BillingAddressService billingAddressService,
                           ShippingAddressService shippingAddressService,
                           PaymentOptionService paymentOptionService) {
        this.orderService = orderService;
        this.billingAddressService = billingAddressService;
        this.shippingAddressService = shippingAddressService;
        this.paymentOptionService = paymentOptionService;
    }

    @GetMapping("/userOrders/{userId}")
    public ResponseEntity<?> getOrdersByUserId(@PathVariable Long userId) {
        Iterable<Order> orders = orderService.findByUserId(userId);

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/userOrders/{orderId}")
    public ResponseEntity<?> getOrderDetails(@PathVariable Long orderId) {

        Order currentOrder = orderService.findById(orderId).get();
        BillingAddress billingAddress = billingAddressService.findById(currentOrder.getBillingAddressId()).get();
        ShippingAddress shippingAddress = shippingAddressService.findById(currentOrder.getShippingAddressId()).get();
        PaymentOption paymentOption = paymentOptionService.findById(currentOrder.getPaymentOptionId()).get();

        Map<String, Object> orderDetails = new HashMap<>();
        orderDetails.put("order", currentOrder);
        orderDetails.put("billingAddress", billingAddress);
        orderDetails.put("shippingAddress", shippingAddress);
        orderDetails.put("paymentOption", paymentOption);

        return new ResponseEntity<>(orderDetails, HttpStatus.OK);
    }
}
