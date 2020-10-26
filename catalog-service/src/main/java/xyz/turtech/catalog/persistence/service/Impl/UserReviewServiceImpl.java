package xyz.turtech.catalog.persistence.service.Impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public Page<UserReview> findUserReviewsByProductId(Long productId, Pageable pageable) {
        return userReviewRepository.findUserReviewsByProductId(productId, pageable);
    }

    @Override
    public Page<UserReview> findUserReviewsByUserId(String userId, Pageable pageable) {
        return userReviewRepository.findUserReviewsByUserId(userId, pageable);
    }

    @Override
    public UserReview saveOrUpdateUserReview(UserReview userReview) {
        return userReviewRepository.save(userReview);
    }
}
