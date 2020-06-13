package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.account.persistence.domain.User;
import xyz.turtech.account.persistence.domain.UserBilling;
import xyz.turtech.account.persistence.domain.UserPayment;
import xyz.turtech.account.persistence.service.UserBillingService;
import xyz.turtech.account.persistence.service.UserPaymentService;
import xyz.turtech.account.persistence.service.UserService;

import java.security.Principal;

@RestController
public class UserPaymentController {

    private final UserPaymentService userPaymentService;
    private final UserBillingService userBillingService;
    private final UserService userService;

    public UserPaymentController(UserPaymentService userPaymentService,
                                 UserBillingService userBillingService,
                                 UserService userService) {
        this.userPaymentService = userPaymentService;
        this.userBillingService = userBillingService;
        this.userService = userService;
    }

    @GetMapping("/userPayment/{userId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getUserPaymentsByUserId(@PathVariable String userId) {
        Iterable<UserPayment> userPayments = userPaymentService.findByUserId(userId);

        return new ResponseEntity<>(userPayments, HttpStatus.OK);
    }

    public ResponseEntity<?> setDefaultPayment() {
        return null;
    }

    @PostMapping("/addNewCreditCard")
    public ResponseEntity<?> addNewCreditCard(@RequestBody UserPayment newCreditCard,
                                              @RequestBody UserBilling newUserBillingAddress,
                                              Principal principal) {

        User user = userService.findByUsername(principal.getName()).get();
        newUserBillingAddress.setUserPaymentId(newCreditCard.getId());
        newCreditCard.setUserBillingId(newUserBillingAddress.getId());

        UserPayment userPayment = userPaymentService.addNewUserPayment(newCreditCard);
        return new ResponseEntity<>(userPayment, HttpStatus.OK);
    }

    @PutMapping("/updateCreditCard")
    public ResponseEntity<?> updateCreditCard(@RequestBody UserPayment updatedCreditCard) {
        return null;
    }

    @DeleteMapping("/deleteCreditCard")
    public ResponseEntity<?> removeCreditCard() {
        return null;
    }
}
