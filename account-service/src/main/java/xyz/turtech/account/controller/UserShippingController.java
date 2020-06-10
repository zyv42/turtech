package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.account.persistence.domain.UserShipping;
import xyz.turtech.account.persistence.service.UserShippingService;

@RestController
public class UserShippingController {

    private final UserShippingService userShippingService;

    public UserShippingController(UserShippingService userShippingService) {
        this.userShippingService = userShippingService;
    }

    @GetMapping("/userShipping/{userId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getUserShippingAddressesByUserId(@PathVariable String userId) {
        Iterable<UserShipping> userShippingAddresses = userShippingService.findByUserId(userId);

        return new ResponseEntity<>(userShippingAddresses, HttpStatus.OK);
    }

    public ResponseEntity<?> addNewUserShippingAddress() {
        return null;
    }

    public ResponseEntity<?> updateUserShippingAddress() {
        return null;
    }

    public ResponseEntity<?> setDefaultUserShippingAddress() {
        return null;
    }

    public ResponseEntity<?> removeUserShippingAddress() {
        return null;
    }
}
