package xyz.turtech.account.controller;

import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.account.persistence.domain.UserShippingAddress;
import xyz.turtech.account.persistence.service.UserShippingAddressService;

import java.util.Optional;

@RestController
public class UserShippingController {

    private final UserShippingAddressService userShippingAddressService;

    public UserShippingController(UserShippingAddressService userShippingAddressService) {
        this.userShippingAddressService = userShippingAddressService;
    }

    @GetMapping(path = "/shipping-addresses")
    public ResponseEntity<?> getUserShippingAddresses() {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        Iterable<UserShippingAddress> userShippingAddresses = userShippingAddressService.findByUserId(token.getName());

        return new ResponseEntity<>(userShippingAddresses, HttpStatus.OK);
    }

    @GetMapping(path = "/shipping-addresses/{shippingAddressId}")
    public ResponseEntity<?> getUserShippingAddressById(@PathVariable Long shippingAddressId) {

        Optional<UserShippingAddress> userShippingAddress = userShippingAddressService.findById(shippingAddressId);

        return new ResponseEntity<>(userShippingAddress.get(), HttpStatus.OK);
    }

    @GetMapping("/shipping-addresses")
    public ResponseEntity<?> getUserShippingAddressesByUserId(@RequestParam String userId) {
        Iterable<UserShippingAddress> userShippingAddresses = userShippingAddressService.findByUserId(userId);

        return new ResponseEntity<>(userShippingAddresses, HttpStatus.OK);
    }


    @PostMapping("/shipping-addresses")
    public ResponseEntity<?> addNewUserShippingAddress(@RequestBody UserShippingAddress newUserShippingAddressAddress) {
        UserShippingAddress userShippingAddress = userShippingAddressService.addNewUserShippingAddress(newUserShippingAddressAddress);
        return new ResponseEntity<>(userShippingAddress, HttpStatus.CREATED);
    }

    @PutMapping("/shipping-addresses/{shippingAddressId}")
    public ResponseEntity<?> updateUserShippingAddress(
            @RequestBody UserShippingAddress updatedUserShippingAddress,
            @PathVariable Long shippingAddressId) {
        UserShippingAddress userShippingAddress = userShippingAddressService.updateUserShippingAddress(updatedUserShippingAddress);
        return new ResponseEntity<>(userShippingAddress, HttpStatus.OK);
    }

    @PutMapping("/shipping-addresses/{shippingAddressId}/set-default")
    public ResponseEntity<?> setDefaultUserShippingAddress(@PathVariable Long shippingAddressId) {
        userShippingAddressService.setDefaultUserShippingAddress(shippingAddressId);
        return new ResponseEntity<>(shippingAddressId, HttpStatus.OK);
    }

    @DeleteMapping("/shipping-addresses/{shippingAddressId}")
    public ResponseEntity<?> removeUserShippingAddress(@PathVariable Long shippingAddressId) {
        userShippingAddressService.removeUserShippingAddress(shippingAddressId);
        return new ResponseEntity<>(shippingAddressId, HttpStatus.OK);
    }
}
