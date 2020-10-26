package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserShipping;

public interface UserShippingService {

    Iterable<UserShipping> findByUserId(String UserId);
    UserShipping addNewUserShippingAddress(UserShipping newUserShippingAddress);
    UserShipping updateUserShippingAddress(UserShipping userShippingAddress);
    void setDefaultUserShippingAddress(Long userShippingAddressId);
    Long removeUserShippingAddress(Long userShippingAddressId);
}
