package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.account.persistence.domain.UserBillingAddress;
import xyz.turtech.account.persistence.domain.UserPaymentOption;
import xyz.turtech.account.persistence.service.UserBillingAddressService;
import xyz.turtech.account.persistence.service.UserPaymentOptionService;

@RestController
public class UserPaymentController {

    private final UserPaymentOptionService userPaymentOptionService;
    private final UserBillingAddressService userBillingAddressService;

    public UserPaymentController(UserPaymentOptionService userPaymentOptionService,
                                 UserBillingAddressService userBillingAddressService) {
        this.userPaymentOptionService = userPaymentOptionService;
        this.userBillingAddressService = userBillingAddressService;
    }

    @GetMapping("/userPaymentOptions/{userId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getUserPaymentOptionsByUserId(@PathVariable String userId) {
        Iterable<UserPaymentOption> userPaymentOptions = userPaymentOptionService.findByUserId(userId);

        return new ResponseEntity<>(userPaymentOptions, HttpStatus.OK);
    }

    @GetMapping("/setDefaultUserPaymentOption/{paymentOptionId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> setDefaultUserPaymentOption(@PathVariable long paymentOptionId) {

        userPaymentOptionService.setDefaultUserPaymentOption(paymentOptionId);
        return new ResponseEntity<>(paymentOptionId, HttpStatus.OK);
    }

    @PostMapping("/addNewUserPaymentOption")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> addNewUserPaymentOption(@RequestBody UserPaymentOption newPaymentOption,
                                                     @RequestBody UserBillingAddress newUserBillingAddressAddress) {
        //TODO consider implementing this on frontend-client level
        //newPaymentOption.setUserBillingAddressId(newUserBillingAddressAddress.getId());

        // TODO add newUserBilling address with userBillingAddressService
        UserPaymentOption userPaymentOption = userPaymentOptionService.addNewUserPaymentOption(newPaymentOption);
        return new ResponseEntity<>(userPaymentOption, HttpStatus.OK);
    }

    @PutMapping("/updateUserPaymentOption")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> updateUserPaymentOption(@RequestBody UserPaymentOption updatedPaymentOption) {

        userPaymentOptionService.updateUserPaymentOption(updatedPaymentOption);
        return new ResponseEntity<>(updatedPaymentOption.getId(), HttpStatus.OK);
    }

    @DeleteMapping("/removeUserPaymentOption/{paymentOptionId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> removeUserPaymentOption(@PathVariable long paymentOptionId) {

        userPaymentOptionService.removeUserPaymentOption(paymentOptionId);
        return new ResponseEntity<>(paymentOptionId, HttpStatus.OK);
    }
}
