package xyz.turtech.account.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.account.exceptions.UserShippingAddressNotFoundException;
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
    public UserShippingAddress findById(Long userShippingAddressId) {
        return userShippingAddressRepository.findById(userShippingAddressId)
                .orElseThrow(() -> new UserShippingAddressNotFoundException
                        ("User Shipping Address with ID: " + userShippingAddressId + " not found."));
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
    public void setDefaultUserShippingAddress(Long userShippingAddressId, String userId) {

        Iterable<UserShippingAddress> userShippingAddresses = userShippingAddressRepository.findByUserId(userId);
        for (UserShippingAddress userShippingAddress : userShippingAddresses) {
            userShippingAddress.setDefaultShippingAddress(userShippingAddress.getId().longValue() == userShippingAddressId);
            userShippingAddressRepository.save(userShippingAddress);
        }
    }

    @Override
    public void removeUserShippingAddress(Long userShippingAddressId) {
        UserShippingAddress userShippingAddress = userShippingAddressRepository.findById(userShippingAddressId).get();

        userShippingAddressRepository.delete(userShippingAddress);
    }
}
