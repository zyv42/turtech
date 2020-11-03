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

    @GetMapping(path = "/userShippingAddresses")
    public ResponseEntity<?> getUserShippingAddresses() {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        Iterable<UserShippingAddress> userShippingAddresses = userShippingAddressService.findByUserId(token.getName());

        return new ResponseEntity<>(userShippingAddresses, HttpStatus.OK);
    }

    @GetMapping(path = "/{userShippingAddressId}")
    public ResponseEntity<?> getUserShippingAddressById(@PathVariable Long userShippingAddressId) {

        Optional<UserShippingAddress> userShippingAddress = userShippingAddressService.findById(userShippingAddressId);

        return new ResponseEntity<>(userShippingAddress.get(), HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserShippingAddressesByUserId(@PathVariable String userId) {
        Iterable<UserShippingAddress> userShippingAddresses = userShippingAddressService.findByUserId(userId);

        return new ResponseEntity<>(userShippingAddresses, HttpStatus.OK);
    }

    @PostMapping("/addNewUserShippingAddress")
    public ResponseEntity<?> addNewUserShippingAddress(@RequestBody UserShippingAddress newUserShippingAddressAddress) {
        UserShippingAddress userShippingAddress = userShippingAddressService.addNewUserShippingAddress(newUserShippingAddressAddress);
        return new ResponseEntity<>(userShippingAddress, HttpStatus.CREATED);
    }

    @PutMapping("/updateUserShippingAddress")
    public ResponseEntity<?> updateUserShippingAddress(@RequestBody UserShippingAddress updatedUserShippingAddress) {
        UserShippingAddress userShippingAddress = userShippingAddressService.updateUserShippingAddress(updatedUserShippingAddress);
        return new ResponseEntity<>(userShippingAddress, HttpStatus.OK);
    }

    @PutMapping("/setDefaultUserShippingAddress/{userShippingAddressId}")
    public ResponseEntity<?> setDefaultUserShippingAddress(@PathVariable long userShippingAddressId) {
        userShippingAddressService.setDefaultUserShippingAddress(userShippingAddressId);
        return new ResponseEntity<>(userShippingAddressId, HttpStatus.OK);
    }

    @DeleteMapping("/removeUserShippingAddress/{userShippingAddressId}")
    public ResponseEntity<?> removeUserShippingAddress(@PathVariable long userShippingAddressId) {
        userShippingAddressService.removeUserShippingAddress(userShippingAddressId);
        return new ResponseEntity<>(userShippingAddressId, HttpStatus.OK);
    }
}
