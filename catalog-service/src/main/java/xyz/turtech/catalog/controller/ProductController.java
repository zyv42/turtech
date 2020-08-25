package xyz.turtech.catalog.controller;

import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.catalog.persistence.domain.Product;
import xyz.turtech.catalog.persistence.service.ProductService;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/{productId}")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getProduct(@PathVariable String productId) {
        Product product = productService.findOne(productId);

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getProducts(@QuerydslPredicate(root = Product.class) Predicate predicate,
                                          @RequestParam(defaultValue = "1") int page,
                                          @RequestParam(defaultValue = "10") int size,
                                          @RequestParam MultiValueMap<String, String> parameters) {

        Page<Product> products = productService.findAllBy(predicate, PageRequest.of(page - 1, size));

        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
