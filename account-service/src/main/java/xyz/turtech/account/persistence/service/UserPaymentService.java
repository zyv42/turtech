package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserPayment;

public interface UserPaymentService {

    Iterable<UserPayment> findByUserId(String userId);
}
