package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.account.persistence.domain.UserPayment;
import xyz.turtech.account.persistence.service.UserPaymentService;

@RestController
public class UserPaymentController {

    private final UserPaymentService userPaymentService;

    public UserPaymentController(UserPaymentService userPaymentService) {
        this.userPaymentService = userPaymentService;
    }

    @GetMapping("/userPayment")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getUserPaymentsByUserId(@PathVariable String userId) {
        Iterable<UserPayment> userPayments = userPaymentService.findByUserId(userId);

        return new ResponseEntity<>(userPayments, HttpStatus.OK);
    }
}
