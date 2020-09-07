package xyz.turtech.catalog.persistence.service.Impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.turtech.catalog.persistence.domain.UserReview;
import xyz.turtech.catalog.persistence.repository.UserReviewRepository;
import xyz.turtech.catalog.persistence.service.UserReviewService;

@Service
@Transactional
public class UserReviewServiceImpl implements UserReviewService {

    private final UserReviewRepository userReviewRepository;

    public UserReviewServiceImpl(UserReviewRepository userReviewRepository) {
        this.userReviewRepository = userReviewRepository;
    }

    @Override
    public Page<UserReview> findUserReviewsByProductId(Long productId, PageRequest pageRequest) {
        return userReviewRepository.findUserReviewsByProductId(productId, pageRequest);
    }

    @Override
    public Page<UserReview> findUserReviewsByUserId(Long userId, PageRequest pageRequest) {
        return userReviewRepository.findUserReviewsByUserId(userId, pageRequest);
    }

    @Override
    public UserReview saveOrUpdateUserReview(UserReview userReview) {
        return userReviewRepository.save(userReview);
    }
}
