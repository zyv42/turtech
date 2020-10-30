package xyz.turtech.order.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.order.persistence.domain.BillingAddress;
import xyz.turtech.order.persistence.repository.BillingAddressRepository;
import xyz.turtech.order.persistence.service.BillingAddressService;

import java.util.Optional;

@Service
public class BillingAddressServiceImpl implements BillingAddressService {

    private final BillingAddressRepository billingAddressRepository;

    public BillingAddressServiceImpl(BillingAddressRepository billingAddressRepository) {
        this.billingAddressRepository = billingAddressRepository;
    }

    @Override
    public Optional<BillingAddress> findById(Long billingAddressId) {
        return billingAddressRepository.findById(billingAddressId);
    }
}
