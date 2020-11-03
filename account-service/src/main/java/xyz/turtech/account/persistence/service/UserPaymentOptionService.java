package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserPaymentOption;

import java.util.Optional;

public interface UserPaymentOptionService {

    Optional<UserPaymentOption> findById(Long userPaymentOptionId);
    Iterable<UserPaymentOption> findByUserId(String userId);
    UserPaymentOption addNewUserPaymentOption(UserPaymentOption newUserPaymentOption);
    UserPaymentOption updateUserPaymentOption(UserPaymentOption userPaymentOption);
    void setDefaultUserPaymentOption(Long userPaymentOptionId);
    Long removeUserPaymentOption(Long userPaymentOptionId);
}
