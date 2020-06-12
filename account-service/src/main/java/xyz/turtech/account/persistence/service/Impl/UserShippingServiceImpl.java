package xyz.turtech.account.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.account.persistence.domain.UserShipping;
import xyz.turtech.account.persistence.repository.UserShippingRepository;
import xyz.turtech.account.persistence.service.UserShippingService;

@Service
public class UserShippingServiceImpl implements UserShippingService {

    private final UserShippingRepository userShippingRepository;

    public UserShippingServiceImpl(UserShippingRepository userShippingRepository) {
        this.userShippingRepository = userShippingRepository;
    }

    @Override
    public Iterable<UserShipping> findByUserId(String userId) {
        return userShippingRepository.findByUserId(userId);
    }

    @Override
    public UserShipping addNewUserShippingAddress(UserShipping newUserShippingAddress) {
        return userShippingRepository.save(newUserShippingAddress);
    }

    @Override
    public UserShipping updateUserShippingAddress(UserShipping userShipping) {
        return userShippingRepository.save(userShipping);
    }

    @Override
    public void setDefaultUserShippingAddress(String userShippingAddressId) {
        UserShipping userShipping = userShippingRepository.findById(userShippingAddressId).get();
        userShipping.setDefaultUserShipping(true);
        userShippingRepository.save(userShipping);
    }

    @Override
    public String removeUserShippingAddress(String userShippingAddressId) {
        UserShipping userShipping = userShippingRepository.findById(userShippingAddressId).get();
        userShippingRepository.delete(userShipping);
        return userShippingAddressId;
    }
}
