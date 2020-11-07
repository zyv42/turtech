package xyz.turtech.account.controller;

import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.account.persistence.domain.UserBillingAddress;
import xyz.turtech.account.persistence.service.UserBillingAddressService;

@RestController
public class UserBillingAddressController {

    private final UserBillingAddressService userBillingAddressService;

    public UserBillingAddressController(UserBillingAddressService userBillingAddressService) {
        this.userBillingAddressService = userBillingAddressService;
    }

    @GetMapping("/users/{userId}/billing-addresses/{userBillingAddressId}")
    public ResponseEntity<?> getUserBillingAddressById(
            @PathVariable String userId,
            @PathVariable Long userBillingAddressId) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        if (token.getName().equals(userId)) {
            UserBillingAddress userBillingAddress = userBillingAddressService.findById(userBillingAddressId);

            return new ResponseEntity<>(userBillingAddress, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
}
