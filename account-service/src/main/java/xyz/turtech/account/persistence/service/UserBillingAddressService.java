package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserBillingAddress;

import java.util.Optional;

public interface UserBillingAddressService {

    Optional<UserBillingAddress> findById(Long userBillingAddressId);
}
