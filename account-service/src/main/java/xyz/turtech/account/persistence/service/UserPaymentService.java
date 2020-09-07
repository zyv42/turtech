package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserPayment;

public interface UserPaymentService {

    Iterable<UserPayment> findByUserId(Long userId);
    UserPayment addNewUserPayment(UserPayment newUserPayment);
    UserPayment updateUserPayment(UserPayment userPayment);
    void setDefaultUserPayment(Long userPaymentId);
    Long removeUserPayment(Long userPaymentId);
}
