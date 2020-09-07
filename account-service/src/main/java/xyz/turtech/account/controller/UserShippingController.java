package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
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
    public ResponseEntity<?> getUserShippingAddressesByUserId(@PathVariable long userId) {
        Iterable<UserShipping> userShippingAddresses = userShippingService.findByUserId(userId);

        return new ResponseEntity<>(userShippingAddresses, HttpStatus.OK);
    }

    @PostMapping("/addNewUserShippingAddress")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> addNewUserShippingAddress(@RequestBody UserShipping newUserShippingAddress) {
        UserShipping userShipping = userShippingService.addNewUserShippingAddress(newUserShippingAddress);
        return new ResponseEntity<>(userShipping, HttpStatus.CREATED);
    }

    @PutMapping("/updateUserShippingAddress")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> updateUserShippingAddress(@RequestBody UserShipping updatedUserShipping) {
        UserShipping userShipping = userShippingService.updateUserShippingAddress(updatedUserShipping);
        return new ResponseEntity<>(userShipping, HttpStatus.OK);
    }

    @PutMapping("/setDefaultUserShippingAddress/{userShippingAddressId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> setDefaultUserShippingAddress(@PathVariable long userShippingAddressId) {
        userShippingService.setDefaultUserShippingAddress(userShippingAddressId);
        return new ResponseEntity<>(userShippingAddressId, HttpStatus.OK);
    }

    @DeleteMapping("/removeUserShippingAddress/{userShippingAddressId}")
    public ResponseEntity<?> removeUserShippingAddress(@PathVariable long userShippingAddressId) {
        userShippingService.removeUserShippingAddress(userShippingAddressId);
        return new ResponseEntity<>(userShippingAddressId, HttpStatus.OK);
    }
}
