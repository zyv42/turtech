package xyz.turtech.account.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserBillingAddressNotFoundException extends RuntimeException {

    public UserBillingAddressNotFoundException(String message) {
        super(message);
    }
}
