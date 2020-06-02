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
}
