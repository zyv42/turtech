package xyz.turtech.account.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserPaymentOptionNotFoundException extends RuntimeException {

    public UserPaymentOptionNotFoundException(String message) {
        super(message);
    }
}
