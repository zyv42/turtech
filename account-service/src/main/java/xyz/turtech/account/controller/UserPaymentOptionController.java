package xyz.turtech.account.controller;

import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.account.persistence.domain.UserBillingAddress;
import xyz.turtech.account.persistence.domain.UserPaymentOption;
import xyz.turtech.account.persistence.service.UserBillingAddressService;
import xyz.turtech.account.persistence.service.UserPaymentOptionService;

@RestController
public class UserPaymentOptionController {

    private final UserPaymentOptionService userPaymentOptionService;
    private final UserBillingAddressService userBillingAddressService;

    public UserPaymentOptionController(UserPaymentOptionService userPaymentOptionService,
                                       UserBillingAddressService userBillingAddressService) {
        this.userPaymentOptionService = userPaymentOptionService;
        this.userBillingAddressService = userBillingAddressService;
    }

    @GetMapping(path = "/users/{userId}/payment-options/{paymentOptionId}")
    public ResponseEntity<UserPaymentOption> getUserPaymentOptionById(
            @PathVariable String userId,
            @PathVariable Long paymentOptionId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            UserPaymentOption userPaymentOption = userPaymentOptionService.findById(paymentOptionId);

            return new ResponseEntity<>(userPaymentOption, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/users/{userId}/payment-options")
    public ResponseEntity<?> getUserPaymentOptionsByUserId(
            @PathVariable String userId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            Iterable<UserPaymentOption> userPaymentOptions = userPaymentOptionService.findByUserId(userId);

            return new ResponseEntity<>(userPaymentOptions, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping("/users/{userId}/payment-options/{paymentOptionId}/set-default")
    public ResponseEntity<?> setDefaultUserPaymentOption(
            @PathVariable String userId,
            @PathVariable Long paymentOptionId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            userPaymentOptionService.setDefaultUserPaymentOption(paymentOptionId, userId);

            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @PostMapping("/users/{userId}/payment-options")
    public ResponseEntity<?> addNewUserPaymentOption(
            @PathVariable String userId,
            @RequestBody UserPaymentOption newPaymentOption,
            @RequestBody UserBillingAddress newUserBillingAddress) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            UserBillingAddress userBillingAddress = userBillingAddressService.addNewUserBillingAddress(newUserBillingAddress);
            newPaymentOption.setBillingAddressId(userBillingAddress.getId());
            UserPaymentOption userPaymentOption = userPaymentOptionService.addNewUserPaymentOption(newPaymentOption);

            return new ResponseEntity<>(userPaymentOption, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping("/users/{userId}/payment-options/{paymentOptionId}")
    public ResponseEntity<?> updateUserPaymentOption(
            @PathVariable String userId,
            @PathVariable Long paymentOptionId,
            @RequestBody UserPaymentOption updatedPaymentOption) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            UserPaymentOption userPaymentOption = userPaymentOptionService.updateUserPaymentOption(updatedPaymentOption);

            return new ResponseEntity<>(userPaymentOption, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/users/{userId}/payment-options/{paymentOptionId}")
    public ResponseEntity<?> removeUserPaymentOption(
            @PathVariable String userId,
            @PathVariable Long paymentOptionId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            userPaymentOptionService.removeUserPaymentOption(paymentOptionId);

            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
}
