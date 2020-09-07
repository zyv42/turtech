package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.account.persistence.domain.UserBilling;
import xyz.turtech.account.persistence.service.UserBillingService;

@RestController
public class UserBillingController {

    private final UserBillingService userBillingService;

    public UserBillingController(UserBillingService userBillingService) {
        this.userBillingService = userBillingService;
    }

    @GetMapping("/userBilling/{userPaymentId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getUserBillingAddressesByUserPaymentId(@PathVariable long userPaymentId) {
        UserBilling userBillingAddresses = userBillingService.findByUserPaymentId(userPaymentId).get();

        return new ResponseEntity<>(userBillingAddresses, HttpStatus.OK);
    }
}
