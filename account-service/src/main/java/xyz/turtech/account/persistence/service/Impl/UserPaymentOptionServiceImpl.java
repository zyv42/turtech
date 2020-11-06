package xyz.turtech.account.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.account.persistence.domain.UserPaymentOption;
import xyz.turtech.account.persistence.repository.UserPaymentOptionsRepository;
import xyz.turtech.account.persistence.service.UserPaymentOptionService;

@Service
public class UserPaymentOptionServiceImpl implements UserPaymentOptionService {

    private final UserPaymentOptionsRepository userPaymentOptionRepository;

    public UserPaymentOptionServiceImpl(UserPaymentOptionsRepository userPaymentOptionRepository) {
        this.userPaymentOptionRepository = userPaymentOptionRepository;
    }

    @Override
    public UserPaymentOption findById(Long userPaymentOptionId) {
        return userPaymentOptionRepository.findById(userPaymentOptionId)
                .orElseThrow(() -> new RuntimeException("User Payment Option not found - " + userPaymentOptionId));
    }

    @Override
    public Iterable<UserPaymentOption> findByUserId(String userId) {
        return userPaymentOptionRepository.findByUserId(userId);
    }

    @Override
    public UserPaymentOption addNewUserPaymentOption(UserPaymentOption newUserPaymentOption) {
        return userPaymentOptionRepository.save(newUserPaymentOption);
    }

    @Override
    public UserPaymentOption updateUserPaymentOption(UserPaymentOption userPaymentOption) {
        return userPaymentOptionRepository.save(userPaymentOption);
    }

    @Override
    public void setDefaultUserPaymentOption(Long userPaymentOptionId, String userId) {
        Iterable<UserPaymentOption> userPaymentOptions = userPaymentOptionRepository.findByUserId(userId);
        for (UserPaymentOption userPaymentOption : userPaymentOptions) {
            userPaymentOption.setDefaultPaymentOption(userPaymentOption.getId().longValue() == userPaymentOptionId);
            userPaymentOptionRepository.save(userPaymentOption);
        }
    }

    @Override
    public void removeUserPaymentOption(Long userPaymentOptionId) {
        UserPaymentOption userPaymentOption = userPaymentOptionRepository.findById(userPaymentOptionId).get();
        userPaymentOptionRepository.delete(userPaymentOption);
    }
}
