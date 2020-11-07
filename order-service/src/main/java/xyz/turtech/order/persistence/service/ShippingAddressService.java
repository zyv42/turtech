package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.ShippingAddress;

public interface ShippingAddressService {

    ShippingAddress findById(Long ShippingAddressId);
}
