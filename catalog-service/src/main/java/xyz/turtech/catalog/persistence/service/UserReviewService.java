package xyz.turtech.catalog.persistence.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import xyz.turtech.catalog.persistence.domain.UserReview;

public interface UserReviewService {

    Page<UserReview> findUserReviewsByProductId(Long productId, Pageable pageable);
    Page<UserReview> findUserReviewsByUserId(String userId, Pageable pageable);

    UserReview saveOrUpdateUserReview(UserReview userReview);
}
