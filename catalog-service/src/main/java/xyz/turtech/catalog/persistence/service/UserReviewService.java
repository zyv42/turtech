package xyz.turtech.catalog.persistence.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import xyz.turtech.catalog.persistence.domain.UserReview;

public interface UserReviewService {

    Page<UserReview> findUserReviewsByProductId(String productId, PageRequest pageRequest);
    Page<UserReview> findUserReviewsByUserId(String userId, PageRequest pageRequest);
}
