package xyz.turtech.order.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.order.persistence.domain.Order;
import xyz.turtech.order.persistence.service.OrderService;

@RestController
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/userOrders/{userId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getOrdersByUserId(@PathVariable String userId) {
        Iterable<Order> orders = orderService.findByUserId(userId);

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
