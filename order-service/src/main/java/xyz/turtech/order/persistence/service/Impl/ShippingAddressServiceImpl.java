package xyz.turtech.order.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.order.persistence.domain.ShippingAddress;
import xyz.turtech.order.persistence.repository.ShippingAddressRepository;
import xyz.turtech.order.persistence.service.ShippingAddressService;

import java.util.Optional;

@Service
public class ShippingAddressServiceImpl implements ShippingAddressService {

    private final ShippingAddressRepository shippingAddressRepository;

    public ShippingAddressServiceImpl(ShippingAddressRepository shippingAddressRepository) {
        this.shippingAddressRepository = shippingAddressRepository;
    }

    @Override
    public Optional<ShippingAddress> findById(Long shippingAddressId) {
        return shippingAddressRepository.findById(shippingAddressId);
    }
}
