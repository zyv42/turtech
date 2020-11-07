package xyz.turtech.order.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.order.persistence.domain.ShippingAddress;
import xyz.turtech.order.persistence.repository.ShippingAddressRepository;
import xyz.turtech.order.persistence.service.ShippingAddressService;

@Service
public class ShippingAddressServiceImpl implements ShippingAddressService {

    private final ShippingAddressRepository shippingAddressRepository;

    public ShippingAddressServiceImpl(ShippingAddressRepository shippingAddressRepository) {
        this.shippingAddressRepository = shippingAddressRepository;
    }

    @Override
    public ShippingAddress findById(Long shippingAddressId) {
        return shippingAddressRepository.findById(shippingAddressId)
                .orElseThrow(() -> new RuntimeException("Shipping Address not found - " + shippingAddressId));
    }
}
