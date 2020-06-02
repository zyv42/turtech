package xyz.turtech.account.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.account.persistence.domain.UserPayment;
import xyz.turtech.account.persistence.repository.UserPaymentRepository;
import xyz.turtech.account.persistence.service.UserPaymentService;

@Service
public class UserPaymentServiceImpl implements UserPaymentService {

    private final UserPaymentRepository userPaymentRepository;

    public UserPaymentServiceImpl(UserPaymentRepository userPaymentRepository) {
        this.userPaymentRepository = userPaymentRepository;
    }

    @Override
    public Iterable<UserPayment> findByUserId(String userId) {
        return userPaymentRepository.findByUserId(userId);
    }
}
