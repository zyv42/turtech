package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.ShippingAddress;

import java.util.Optional;

public interface ShippingAddressService {

    Optional<ShippingAddress> findById(Long ShippingAddressId);
}
