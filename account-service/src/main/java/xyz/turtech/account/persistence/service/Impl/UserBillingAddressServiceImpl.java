package xyz.turtech.account.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.account.persistence.repository.UserBillingAddressRepository;
import xyz.turtech.account.persistence.service.UserBillingAddressService;

import java.util.Optional;

@Service
public class UserBillingAddressServiceImpl implements UserBillingAddressService {

    private final UserBillingAddressRepository userBillingAddressRepository;

    public UserBillingAddressServiceImpl(UserBillingAddressRepository userBillingAddressRepository) {
        this.userBillingAddressRepository = userBillingAddressRepository;
    }
}
