package xyz.turtech.catalog.controller;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.catalog.persistence.domain.Product;

@RestController
public class ProductController {


    @GetMapping("/all")
    public Page<Product> getAllProducts() {

    }
}
