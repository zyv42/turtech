package xyz.turtech.account.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.account.persistence.domain.UserPaymentOption;
import xyz.turtech.account.persistence.repository.UserPaymentOptionsRepository;
import xyz.turtech.account.persistence.service.UserPaymentOptionService;

import java.util.Optional;

@Service
public class UserPaymentOptionServiceImpl implements UserPaymentOptionService {

    private final UserPaymentOptionsRepository userPaymentOptionsRepository;

    public UserPaymentOptionServiceImpl(UserPaymentOptionsRepository userPaymentOptionsRepository) {
        this.userPaymentOptionsRepository = userPaymentOptionsRepository;
    }

    @Override
    public Optional<UserPaymentOption> findById(Long userPaymentOptionId) {
        return userPaymentOptionsRepository.findById(userPaymentOptionId);
    }

    @Override
    public Iterable<UserPaymentOption> findByUserId(String userId) {
        return userPaymentOptionsRepository.findByUserId(userId);
    }

    @Override
    public UserPaymentOption addNewUserPaymentOption(UserPaymentOption newUserPaymentOption) {
        return userPaymentOptionsRepository.save(newUserPaymentOption);
    }

    @Override
    public UserPaymentOption updateUserPaymentOption(UserPaymentOption userPaymentOption) {
        return userPaymentOptionsRepository.save(userPaymentOption);
    }

    @Override
    public void setDefaultUserPaymentOption(Long userPaymentOptionId) {
        UserPaymentOption userPaymentOption = userPaymentOptionsRepository.findById(userPaymentOptionId).get();
        userPaymentOption.setDefaultPaymentOption(true);
        userPaymentOptionsRepository.save(userPaymentOption);
    }

    @Override
    public Long removeUserPaymentOption(Long userPaymentOptionId) {
        UserPaymentOption userPaymentOption = userPaymentOptionsRepository.findById(userPaymentOptionId).get();
        userPaymentOptionsRepository.delete(userPaymentOption);
        return userPaymentOptionId;
    }
}
