package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.account.persistence.domain.UserBilling;
import xyz.turtech.account.persistence.domain.UserPayment;
import xyz.turtech.account.persistence.service.UserBillingService;
import xyz.turtech.account.persistence.service.UserPaymentService;

import java.security.Principal;

@RestController
public class UserPaymentController {

    private final UserPaymentService userPaymentService;
    private final UserBillingService userBillingService;

    public UserPaymentController(UserPaymentService userPaymentService,
                                 UserBillingService userBillingService) {
        this.userPaymentService = userPaymentService;
        this.userBillingService = userBillingService;
    }

    @GetMapping("/userPayment/{userId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getUserPaymentsByUserId(@PathVariable long userId) {
        Iterable<UserPayment> userPayments = userPaymentService.findByUserId(userId);

        return new ResponseEntity<>(userPayments, HttpStatus.OK);
    }

    @GetMapping("/setDefaultUserPayment/{paymentId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> setDefaultUserPayment(@PathVariable long paymentId) {
        userPaymentService.setDefaultUserPayment(paymentId);
        return new ResponseEntity<>(paymentId, HttpStatus.OK);
    }

    @PostMapping("/addNewUserPayment")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> addNewUserPayment(@RequestBody UserPayment newCreditCard,
                                               @RequestBody UserBilling newUserBillingAddress,
                                               Principal principal) {

        newUserBillingAddress.setUserPaymentId(newCreditCard.getId());
        newCreditCard.setUserBillingId(newUserBillingAddress.getId());

        UserPayment userPayment = userPaymentService.addNewUserPayment(newCreditCard);
        return new ResponseEntity<>(userPayment, HttpStatus.OK);
    }

    @PutMapping("/updateUserPayment")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> updateUserPayment(@RequestBody UserPayment updatedCreditCard) {

        userPaymentService.updateUserPayment(updatedCreditCard);
        return new ResponseEntity<>(updatedCreditCard.getId(), HttpStatus.OK);
    }

    @DeleteMapping("/removeUserPayment/{paymentId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> removeUserPayment(@PathVariable long paymentId) {

        userPaymentService.removeUserPayment(paymentId);
        return new ResponseEntity<>(paymentId, HttpStatus.OK);
    }
}
