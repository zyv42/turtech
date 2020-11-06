package xyz.turtech.catalog.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.catalog.persistence.domain.UserReview;
import xyz.turtech.catalog.persistence.service.UserReviewService;

@RestController
public class UserReviewController {

    private final UserReviewService userReviewService;

    public UserReviewController(UserReviewService userReviewService) {
        this.userReviewService = userReviewService;
    }

    @GetMapping("/user-reviews")
    public Page<UserReview> getReviewsByProduct(@RequestParam Long productId,
                                                @RequestParam int page,
                                                @RequestParam int size) {
        return userReviewService.findUserReviewsByProductId(productId, PageRequest.of(page, size));
    }

    @GetMapping("/user-reviews")
    public Page<UserReview> getReviewsByUser(@RequestParam String userId,
                                             @RequestParam int page,
                                             @RequestParam int size) {
        return userReviewService.findUserReviewsByUserId(userId, PageRequest.of(page, size));
    }

    @PostMapping("/user-reviews")
    public ResponseEntity<?> createNewUserReview(@RequestBody UserReview userReview) {
        UserReview savedUserReview = userReviewService.saveOrUpdateUserReview(userReview);
        return new ResponseEntity<>(savedUserReview, HttpStatus.CREATED);
    }
}
