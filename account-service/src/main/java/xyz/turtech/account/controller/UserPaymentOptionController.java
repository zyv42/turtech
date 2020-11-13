package xyz.turtech.account.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.account.persistence.domain.UserBillingAddress;
import xyz.turtech.account.persistence.domain.UserPaymentOption;
import xyz.turtech.account.persistence.service.UserBillingAddressService;
import xyz.turtech.account.persistence.service.UserPaymentOptionService;

import java.util.HashMap;

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
            @RequestBody JsonNode newPaymentOption) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            ObjectMapper objectMapper = new ObjectMapper();
            UserPaymentOption newUserPaymentOption = objectMapper.convertValue(newPaymentOption.get("userPaymentOption"), UserPaymentOption.class);
            UserBillingAddress newUserBillingAddress = objectMapper.convertValue(newPaymentOption.get("userBillingAddress"), UserBillingAddress.class);

            UserBillingAddress userBillingAddress = userBillingAddressService.addNewUserBillingAddress(newUserBillingAddress);
            newUserPaymentOption.setBillingAddressId(userBillingAddress.getId());
            newUserPaymentOption.setUserId(userId);
            UserPaymentOption userPaymentOption = userPaymentOptionService.addNewUserPaymentOption(newUserPaymentOption);

            HashMap<String, Object> response = new HashMap<>();
            response.put("userPaymentOption", userPaymentOption);
            response.put("userBillingAddress", userBillingAddress);

            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping("/users/{userId}/payment-options/{paymentOptionId}")
    public ResponseEntity<?> updateUserPaymentOption(
            @PathVariable String userId,
            @PathVariable Long paymentOptionId,
            @RequestBody JsonNode updatedPaymentOption) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            ObjectMapper objectMapper = new ObjectMapper();
            UserPaymentOption updatedUserPaymentOption = objectMapper.convertValue(updatedPaymentOption.get("userPaymentOption"), UserPaymentOption.class);
            UserBillingAddress updatedUserBillingAddress = objectMapper.convertValue(updatedPaymentOption.get("userBillingAddress"), UserBillingAddress.class);

            UserPaymentOption userPaymentOption = userPaymentOptionService.updateUserPaymentOption(updatedUserPaymentOption);
            UserBillingAddress userBillingAddress = userBillingAddressService.updateUserBillingAddress(updatedUserBillingAddress);

            HashMap<String, Object> response = new HashMap<>();
            response.put("userPaymentOption", userPaymentOption);
            response.put("userBillingAddress", userBillingAddress);

            return new ResponseEntity<>(response, HttpStatus.OK);
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
            UserPaymentOption userPaymentOption = userPaymentOptionService.findById(paymentOptionId);

            userBillingAddressService.removeUserBillingAddress(userPaymentOption.getBillingAddressId());
            userPaymentOptionService.removeUserPaymentOption(paymentOptionId);

            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
}
