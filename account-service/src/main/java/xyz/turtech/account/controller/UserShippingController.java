package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.account.persistence.domain.UserShippingAddress;
import xyz.turtech.account.persistence.service.UserShippingAddressService;

@RestController
public class UserShippingController {

    private final UserShippingAddressService userShippingAddressService;

    public UserShippingController(UserShippingAddressService userShippingAddressService) {
        this.userShippingAddressService = userShippingAddressService;
    }

    @GetMapping("/userShipping/{userId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getUserShippingAddressesByUserId(@PathVariable String userId) {
        Iterable<UserShippingAddress> userShippingAddresses = userShippingAddressService.findByUserId(userId);

        return new ResponseEntity<>(userShippingAddresses, HttpStatus.OK);
    }

    @PostMapping("/addNewUserShippingAddress")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> addNewUserShippingAddress(@RequestBody UserShippingAddress newUserShippingAddressAddress) {
        UserShippingAddress userShippingAddress = userShippingAddressService.addNewUserShippingAddress(newUserShippingAddressAddress);
        return new ResponseEntity<>(userShippingAddress, HttpStatus.CREATED);
    }

    @PutMapping("/updateUserShippingAddress")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> updateUserShippingAddress(@RequestBody UserShippingAddress updatedUserShippingAddress) {
        UserShippingAddress userShippingAddress = userShippingAddressService.updateUserShippingAddress(updatedUserShippingAddress);
        return new ResponseEntity<>(userShippingAddress, HttpStatus.OK);
    }

    @PutMapping("/setDefaultUserShippingAddress/{userShippingAddressId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
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
