package xyz.turtech.account.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.account.persistence.domain.UserBilling;
import xyz.turtech.account.persistence.repository.UserBillingRepository;
import xyz.turtech.account.persistence.service.UserBillingService;

import java.util.Optional;

@Service
public class UserBillingServiceImpl implements UserBillingService {

    private final UserBillingRepository userBillingRepository;

    public UserBillingServiceImpl(UserBillingRepository userBillingRepository) {
        this.userBillingRepository = userBillingRepository;
    }

    @Override
    public Optional<UserBilling> findByUserPaymentId(Long userPaymentId) {
        return userBillingRepository.findByUserPaymentId(userPaymentId);
    }
}
