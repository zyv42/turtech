package xyz.turtech.account.persistence.service;

import xyz.turtech.account.persistence.domain.UserShipping;

public interface UserShippingService {

    Iterable<UserShipping> findByUserId(String UserId);
}
