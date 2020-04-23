package xyz.turtech.catalog.persistence.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.catalog.persistence.domain.UserReview;

@Repository
public interface UserReviewRepository extends MongoRepository<UserReview, String> {

    Page<UserReview> findUserReviewsByProductId(String productId, PageRequest pageRequest);
    Page<UserReview> findUserReviewsByUserId(String userId, PageRequest pageRequest);
}
