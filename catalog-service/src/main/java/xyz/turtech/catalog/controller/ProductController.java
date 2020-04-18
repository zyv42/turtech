package xyz.turtech.catalog.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.catalog.persistence.domain.Product;
import xyz.turtech.catalog.persistence.service.ProductService;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/all")
    @PreAuthorize("permitAll()")
    public Page<Product> getAllProducts() {
        return productService.findAll(PageRequest.of(0, 5));
    }
}
