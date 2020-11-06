package xyz.turtech.catalog.controller;

import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.turtech.catalog.persistence.domain.Product;
import xyz.turtech.catalog.persistence.service.ProductService;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<?> getProduct(@PathVariable Long productId) {
        Product product = productService.findById(productId).get();

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/products")
    public ResponseEntity<?> getProducts(@QuerydslPredicate(root = Product.class) Predicate predicate,
                                          @RequestParam(defaultValue = "1") int page,
                                          @RequestParam(defaultValue = "10") int size) {

        Page<Product> products = productService.findAll(predicate, PageRequest.of(page - 1, size));

        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
