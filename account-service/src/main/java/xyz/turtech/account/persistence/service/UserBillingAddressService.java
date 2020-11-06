package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserBillingAddress;

import java.util.Optional;

public interface UserBillingAddressService {

    UserBillingAddress findById(Long userBillingAddressId);
    UserBillingAddress addNewUserBillingAddress(UserBillingAddress newUserBillingAddress);
    UserBillingAddress updateUserBillingAddress(UserBillingAddress userBillingAddress);
    void removeUserBillingAddress(Long userBillingAddressId);
}
