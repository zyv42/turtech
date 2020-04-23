package xyz.turtech.catalog.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.catalog.persistence.domain.UserReview;
import xyz.turtech.catalog.persistence.service.UserReviewService;

@RestController
public class UserReviewController {

    private final UserReviewService userReviewService;

    public UserReviewController(UserReviewService userReviewService) {
        this.userReviewService = userReviewService;
    }

    @GetMapping("/reviewsByProduct")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public Page<UserReview> getReviewsByProduct(String productId) {
        return userReviewService.findUserReviewsByProductId(productId, PageRequest.of(0, 10));
    }

    @GetMapping("/reviewsBy")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public Page<UserReview> getReviewsByUser(String userId) {
        return userReviewService.findUserReviewsByUserId(userId, PageRequest.of(0, 10));
    }

    @PostMapping("/leaveUserReview")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> createNewUserReview(@RequestBody UserReview userReview) {
        UserReview savedUserReview = userReviewService.saveOrUpdateUserReview(userReview);
        return new ResponseEntity<>(savedUserReview, HttpStatus.CREATED);
    }
}
