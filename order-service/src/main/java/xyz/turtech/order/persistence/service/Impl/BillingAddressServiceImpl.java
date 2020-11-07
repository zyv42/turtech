package xyz.turtech.order.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.order.persistence.domain.BillingAddress;
import xyz.turtech.order.persistence.repository.BillingAddressRepository;
import xyz.turtech.order.persistence.service.BillingAddressService;

@Service
public class BillingAddressServiceImpl implements BillingAddressService {

    private final BillingAddressRepository billingAddressRepository;

    public BillingAddressServiceImpl(BillingAddressRepository billingAddressRepository) {
        this.billingAddressRepository = billingAddressRepository;
    }

    @Override
    public BillingAddress findById(Long billingAddressId) {
        return billingAddressRepository.findById(billingAddressId)
                .orElseThrow(() -> new RuntimeException("Billing Address not found - " + billingAddressId));
    }
}
