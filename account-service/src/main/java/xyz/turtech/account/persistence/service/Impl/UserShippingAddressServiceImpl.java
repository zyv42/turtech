package xyz.turtech.account.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.account.persistence.domain.UserShippingAddress;
import xyz.turtech.account.persistence.repository.UserShippingAddressRepository;
import xyz.turtech.account.persistence.service.UserShippingAddressService;

@Service
public class UserShippingAddressServiceImpl implements UserShippingAddressService {

    private final UserShippingAddressRepository userShippingAddressRepository;

    public UserShippingAddressServiceImpl(UserShippingAddressRepository userShippingAddressRepository) {
        this.userShippingAddressRepository = userShippingAddressRepository;
    }

    @Override
    public Iterable<UserShippingAddress> findByUserId(String userId) {
        return userShippingAddressRepository.findByUserId(userId);
    }

    @Override
    public UserShippingAddress addNewUserShippingAddress(UserShippingAddress newUserShippingAddressAddress) {
        return userShippingAddressRepository.save(newUserShippingAddressAddress);
    }

    @Override
    public UserShippingAddress updateUserShippingAddress(UserShippingAddress userShippingAddress) {
        return userShippingAddressRepository.save(userShippingAddress);
    }

    @Override
    public void setDefaultUserShippingAddress(Long userShippingAddressId) {
        UserShippingAddress userShippingAddress = userShippingAddressRepository.findById(userShippingAddressId).get();
        userShippingAddress.setDefaultUserShippingAddress(true);
        userShippingAddressRepository.save(userShippingAddress);
    }

    @Override
    public Long removeUserShippingAddress(Long userShippingAddressId) {
        UserShippingAddress userShippingAddress = userShippingAddressRepository.findById(userShippingAddressId).get();
        userShippingAddressRepository.delete(userShippingAddress);
        return userShippingAddressId;
    }
}
