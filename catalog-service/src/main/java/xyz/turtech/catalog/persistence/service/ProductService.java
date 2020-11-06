package xyz.turtech.catalog.persistence.service;

import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import xyz.turtech.catalog.persistence.domain.Product;

import java.util.Optional;

public interface ProductService {

    Product findById(Long productId);
    Page<Product> findAll(Predicate predicate, Pageable pageable);
}
