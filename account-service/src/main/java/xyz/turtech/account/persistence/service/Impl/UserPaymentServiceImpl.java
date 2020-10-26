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

    @Override
    public UserPayment addNewUserPayment(UserPayment newUserPayment) {
        return userPaymentRepository.save(newUserPayment);
    }

    @Override
    public UserPayment updateUserPayment(UserPayment userPayment) {
        return userPaymentRepository.save(userPayment);
    }

    @Override
    public void setDefaultUserPayment(Long userPaymentId) {
        UserPayment userPayment = userPaymentRepository.findById(userPaymentId).get();
        userPayment.setDefaultPayment(true);
        userPaymentRepository.save(userPayment);
    }

    @Override
    public Long removeUserPayment(Long userPaymentId) {
        UserPayment userPayment = userPaymentRepository.findById(userPaymentId).get();
        userPaymentRepository.delete(userPayment);
        return userPaymentId;
    }
}
