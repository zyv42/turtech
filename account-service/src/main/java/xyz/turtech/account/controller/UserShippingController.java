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

    @GetMapping("/userShipping")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getUserShippingsByUserId(@PathVariable String userId) {
        Iterable<UserShipping> userShippings = userShippingService.findByUserId(userId);

        return new ResponseEntity<>(userShippings, HttpStatus.OK);
    }
}
