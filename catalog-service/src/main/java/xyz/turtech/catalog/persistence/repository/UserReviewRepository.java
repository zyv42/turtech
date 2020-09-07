package xyz.turtech.catalog.persistence.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.catalog.persistence.domain.UserReview;

@Repository
public interface UserReviewRepository extends JpaRepository<UserReview, Long> {

    Page<UserReview> findUserReviewsByProductId(Long productId, PageRequest pageRequest);
    Page<UserReview> findUserReviewsByUserId(Long userId, PageRequest pageRequest);
}
