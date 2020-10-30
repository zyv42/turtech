package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.account.persistence.domain.UserBillingAddress;
import xyz.turtech.account.persistence.service.UserBillingAddressService;

@RestController
public class UserBillingController {

    private final UserBillingAddressService userBillingAddressService;

    public UserBillingController(UserBillingAddressService userBillingAddressService) {
        this.userBillingAddressService = userBillingAddressService;
    }

    @GetMapping("/userBilling/{userPaymentId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getUserBillingAddressesByUserPaymentId(@PathVariable long userPaymentId) {
        UserBillingAddress userBillingAddressAddresses = userBillingAddressService.findByUserPaymentId(userPaymentId).get();

        return new ResponseEntity<>(userBillingAddressAddresses, HttpStatus.OK);
    }
}
