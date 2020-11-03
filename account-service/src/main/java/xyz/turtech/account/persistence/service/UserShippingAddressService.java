package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserShippingAddress;

import java.util.Optional;

public interface UserShippingAddressService {

    Optional<UserShippingAddress> findById(Long userShippingAddressId);
    Iterable<UserShippingAddress> findByUserId(String UserId);
    UserShippingAddress addNewUserShippingAddress(UserShippingAddress newUserShippingAddressAddress);
    UserShippingAddress updateUserShippingAddress(UserShippingAddress userShippingAddress);
    void setDefaultUserShippingAddress(Long userShippingAddressId);
    Long removeUserShippingAddress(Long userShippingAddressId);
}
