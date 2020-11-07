package xyz.turtech.account.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.account.exceptions.UserBillingAddressNotFoundException;
import xyz.turtech.account.persistence.domain.UserBillingAddress;
import xyz.turtech.account.persistence.repository.UserBillingAddressRepository;
import xyz.turtech.account.persistence.service.UserBillingAddressService;

@Service
public class UserBillingAddressServiceImpl implements UserBillingAddressService {

    private final UserBillingAddressRepository userBillingAddressRepository;

    public UserBillingAddressServiceImpl(UserBillingAddressRepository userBillingAddressRepository) {
        this.userBillingAddressRepository = userBillingAddressRepository;
    }

    @Override
    public UserBillingAddress findById(Long userBillingAddressId) {
        return userBillingAddressRepository.findById(userBillingAddressId)
                .orElseThrow(() -> new UserBillingAddressNotFoundException
                        ("User Billing Address with ID: " + userBillingAddressId + " not found."));
    }

    @Override
    public UserBillingAddress addNewUserBillingAddress(UserBillingAddress newUserBillingAddress) {
        return userBillingAddressRepository.save(newUserBillingAddress);
    }

    @Override
    public UserBillingAddress updateUserBillingAddress(UserBillingAddress userBillingAddress) {
        return userBillingAddressRepository.save(userBillingAddress);
    }

    @Override
    public void removeUserBillingAddress(Long userBillingAddressId) {
        UserBillingAddress userBillingAddress = userBillingAddressRepository.findById(userBillingAddressId).get();

        userBillingAddressRepository.delete(userBillingAddress);
    }
}
