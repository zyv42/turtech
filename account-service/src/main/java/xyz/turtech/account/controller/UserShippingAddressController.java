package xyz.turtech.account.controller;

import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.account.persistence.domain.UserShippingAddress;
import xyz.turtech.account.persistence.service.UserShippingAddressService;

@RestController
public class UserShippingAddressController {

    private final UserShippingAddressService userShippingAddressService;

    public UserShippingAddressController(UserShippingAddressService userShippingAddressService) {
        this.userShippingAddressService = userShippingAddressService;
    }

    @GetMapping(path = "/users/{userId}/shipping-addresses/{shippingAddressId}")
    public ResponseEntity<?> getUserShippingAddressById(
            @PathVariable String userId,
            @PathVariable Long shippingAddressId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            UserShippingAddress userShippingAddress = userShippingAddressService.findById(shippingAddressId);

            return new ResponseEntity<>(userShippingAddress, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/users/{userId}/shipping-addresses")
    public ResponseEntity<?> getUserShippingAddressesByUserId(
            @PathVariable String userId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            Iterable<UserShippingAddress> userShippingAddresses = userShippingAddressService.findByUserId(userId);

            return new ResponseEntity<>(userShippingAddresses, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }


    @PostMapping("/users/{userId}/shipping-addresses")
    public ResponseEntity<?> addNewUserShippingAddress(
            @PathVariable String userId,
            @RequestBody UserShippingAddress newUserShippingAddress) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            UserShippingAddress userShippingAddress = userShippingAddressService.addNewUserShippingAddress(newUserShippingAddress);

            return new ResponseEntity<>(userShippingAddress, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping("/users/{userId}/shipping-addresses/{shippingAddressId}")
    public ResponseEntity<?> updateUserShippingAddress(
            @PathVariable String userId,
            @PathVariable Long shippingAddressId,
            @RequestBody UserShippingAddress updatedUserShippingAddress) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            UserShippingAddress userShippingAddress = userShippingAddressService.updateUserShippingAddress(updatedUserShippingAddress);

            return new ResponseEntity<>(userShippingAddress, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping("/users/{userId}/shipping-addresses/{shippingAddressId}/set-default")
    public ResponseEntity<?> setDefaultUserShippingAddress(
            @PathVariable String userId,
            @PathVariable Long shippingAddressId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            userShippingAddressService.setDefaultUserShippingAddress(shippingAddressId, userId);

            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/users/{userId}/shipping-addresses/{shippingAddressId}")
    public ResponseEntity<?> removeUserShippingAddress(
            @PathVariable String userId,
            @PathVariable Long shippingAddressId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            userShippingAddressService.removeUserShippingAddress(shippingAddressId);

            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
}
