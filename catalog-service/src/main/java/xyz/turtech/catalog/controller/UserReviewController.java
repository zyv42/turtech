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
    public Page<UserReview> getReviewsByProduct(@PathVariable String productId,
                                                @PathVariable int page,
                                                @PathVariable int size) {
        return userReviewService.findUserReviewsByProductId(productId, PageRequest.of(page, size));
    }

    @GetMapping("/reviewsBy")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public Page<UserReview> getReviewsByUser(@PathVariable String userId,
                                             @PathVariable int page,
                                             @PathVariable int size) {
        return userReviewService.findUserReviewsByUserId(userId, PageRequest.of(page, size));
    }

    @PostMapping("/leaveUserReview")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> createNewUserReview(@RequestBody UserReview userReview) {
        UserReview savedUserReview = userReviewService.saveOrUpdateUserReview(userReview);
        return new ResponseEntity<>(savedUserReview, HttpStatus.CREATED);
    }
}
