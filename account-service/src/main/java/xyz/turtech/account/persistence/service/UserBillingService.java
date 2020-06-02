package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserBilling;

import java.util.Optional;

public interface UserBillingService {

    Optional<UserBilling> findByUserPaymentId(String userPaymentId);
}
