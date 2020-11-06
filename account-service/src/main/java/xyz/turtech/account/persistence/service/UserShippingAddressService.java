package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserShippingAddress;

import java.util.Optional;

public interface UserShippingAddressService {

    UserShippingAddress findById(Long userShippingAddressId);
    Iterable<UserShippingAddress> findByUserId(String userId);
    UserShippingAddress addNewUserShippingAddress(UserShippingAddress newUserShippingAddressAddress);
    UserShippingAddress updateUserShippingAddress(UserShippingAddress userShippingAddress);
    void setDefaultUserShippingAddress(Long userShippingAddressId, String userId);
    void removeUserShippingAddress(Long userShippingAddressId);
}
