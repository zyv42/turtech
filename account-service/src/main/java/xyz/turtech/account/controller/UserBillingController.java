package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.account.persistence.domain.UserBillingAddress;
import xyz.turtech.account.persistence.service.UserBillingAddressService;

import java.util.Optional;

@RestController
public class UserBillingController {

    private final UserBillingAddressService userBillingAddressService;

    public UserBillingController(UserBillingAddressService userBillingAddressService) {
        this.userBillingAddressService = userBillingAddressService;
    }

    @GetMapping("/billing-addresses/{userBillingAddressId}")
    public ResponseEntity<?> getUserBillingAddressById(@PathVariable Long userBillingAddressId) {

        Optional<UserBillingAddress> userBillingAddress = userBillingAddressService.findById(userBillingAddressId);

        return new ResponseEntity<>(userBillingAddress.get(), HttpStatus.OK);
    }
/*
    @GetMapping("/billing-addresses/{userPaymentId}")
    public ResponseEntity<?> getUserBillingAddressesByUserPaymentId(@PathVariable Long userPaymentOptionId) {
        UserBillingAddress userBillingAddressAddresses = userBillingAddressService.findById(userPaymentOptionId).get();

        return new ResponseEntity<>(userBillingAddressAddresses, HttpStatus.OK);
    }
 */
}
