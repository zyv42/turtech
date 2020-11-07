package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.BillingAddress;

public interface BillingAddressService {

    BillingAddress findById(Long billingAddressId);
}
