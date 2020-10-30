package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.BillingAddress;

import java.util.Optional;

public interface BillingAddressService {

    Optional<BillingAddress> findById(Long billingAddressId);
}
